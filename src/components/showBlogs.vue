
<template>
  

    <div v-theme="'wide'" id="show-blogs">
           <h1>All Blog Articles</h1>
           <input type="text" v-model="search" id="search" placeholder="search blogs">
           <div v-for="post in filteredBlogs" class="single-blog">
               <h2 v-rainbow>{{ post.title }}</h2>
               <article>{{ post.body }}</article>
           </div>
       </div>
</template> 

<script>
// Imports
import searchMixin from "../mixins/searchMixin";
export default {
    data () {
        return {
          posts: [],
          search:""
        }
    },
    methods: {

    },
    created(){
       this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
              function (data) {
                console.log(data);
                this.posts = data.body;
              }
        );
    },
    computed: {
     
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#search{
  width:100%;
}
</style>


<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-show="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>

      
        <div id="checkboxes">
          <label>ninja</label>
          <input type="checkbox" name="ninja" value="ninja" v-model="blog.categories">
          <label>mario</label>
          <input type="checkbox" name="mario" value="mario" v-model="blog.categories">
          <label>cake</label>
          <input type="checkbox" name="cake" value="cake" v-model="blog.categories">
          <label>cheese</label>
          <input type="checkbox" name="cheese" value="cheese" v-model="blog.categories">
        </div>
        <select v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
        </select>
                    <button v-on:click.prevent="post">submit</button>
        </form>
        <div id="preview">
          <div v-if="submitted">thanks for submitting your post</div>
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Categories</p>
            <ul>
              <li v-for='category in blog.categories'>{{category}}</li>
            </ul>
            <p>Author:{{blog.author}}</p>
        </div>
    </div>
</template> 

<script>
// Imports


export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author:''

            },
            authors: ['gizmo49','adeleke','munachi'],
            submitted: false
        }
    },
    methods: {
      post: function() {
         this.$http.post('https://jsonplaceholder.typicode.com/posts',{

          userId: 1,
          title: this.blog.title,
          body: this.blog.content
         
         }).then( function (data){

             console.log(data)
             this.submitted = true;

         }
         
          );
      }
    }
}
</script>

<style>

#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>

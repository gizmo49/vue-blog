export default{
	
	    computed: {
	      filteredBlogs: function (){
	        return this.posts.filter((post) => {
	            return post.title.match(this.search);
	        });
	          
	      }
	    }
}
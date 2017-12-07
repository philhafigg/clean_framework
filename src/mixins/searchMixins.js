export default {

    computed: {

        filteredBlog: function() {
            
            return  this.blogs.filter((blog)=>{

                return blog.title.match(this.search);
            })
        }
    }
}
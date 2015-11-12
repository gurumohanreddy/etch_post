angular.module("Etchpost")
    .controller("Postctrl",function(PostServer){
      var postctrl = this;

        function init(){

              fetchPost();
        };
        function fetchPost(){

            postctrl.posts = PostServer.fetch();

        };

        postctrl.deletePost = function(post){
            var ind = postctrl.posts.indexOf(post);
            if(ind > -1){
                postctrl.posts.splice(ind,1);
                PostServer.delete(post.parseObject); 
            }

        };

          init();

  });

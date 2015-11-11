angular.module("Etchpost")
    .controller("Postctrl",function(PostServer){
      var postctrl = this;

      function init(){

            postctrl.initializeNewPost();
            fetchPost();
      };
      function fetchPost(){

          postctrl.posts = PostServer.fetch();

      };


      postctrl.addPost = function(){
          postctrl.posts.push(postctrl.newPost);

          PostServer.create(postctrl.newPost.title,
            postctrl.newPost.description,
            postctrl.newPost.link
          );
                  postctrl.initializeNewPost();

      };


      postctrl.initializeNewPost = function(){
        postctrl.newPost = {};
      };



        init();

    });

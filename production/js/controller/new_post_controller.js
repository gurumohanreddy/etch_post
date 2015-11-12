angular.module("Etchpost")
    .controller("NewPostctrl",function(PostServer){
      var newPostctrl = this;

      function init(){

            newPostctrl.initializeNewPost();

      };


      newPostctrl.addPost = function(){
          
          PostServer.create(newPostctrl.newPost.title,
            newPostctrl.newPost.description,
            newPostctrl.newPost.link
          );
                  newPostctrl.initializeNewPost();

      };


      newPostctrl.initializeNewPost = function(){
        newPostctrl.newPost = {};
      };



        init();

    });

angular.module("Etchpost")
    .controller("NewPostctrl",function(PostServer,$state,AuthenticationService){
      var newPostctrl = this;
      console.log('dsfsdh');

      AuthenticationService.requireAuthentication();

      function init(){

            newPostctrl.initializeNewPost();

      };


      newPostctrl.addPost = function(){

          PostServer.create(newPostctrl.newPost.title,
            newPostctrl.newPost.description,
            newPostctrl.newPost.link
          );
                  newPostctrl.initializeNewPost();
                  $state.go('posts');
      };


      newPostctrl.initializeNewPost = function(){
        newPostctrl.newPost = {};
      };



        init();

    });

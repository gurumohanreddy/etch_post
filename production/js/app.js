angular.module("Etchpost",[]);

angular.module("Etchpost")
    .controller("Postctrl",function(){
      var postctrl = this;

      postctrl.addPost = function(){
        console.log(postctrl.newPost);
        postctrl.posts.push(postctrl.newPost);
        postctrl.initializeNewPost();
        console.log(postctrl.posts);
      };

      postctrl.initializeNewPost = function(){
        postctrl.newPost = {};
      };

      postctrl.initializeNewPost();
      postctrl.posts =[];

    });

angular.module("Etchpost")
    .controller("Postctrl",function(PostServer){
      var postctrl = this;

        function init(){

              fetchPost();
        };
        function fetchPost(){

            postctrl.posts = PostServer.fetch();

        };


          init();

  });

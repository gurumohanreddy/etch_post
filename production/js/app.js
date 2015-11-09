angular.module("Etchpost",[]);

angular.module("Etchpost")
    .controller("Postctrl",function($q){
      var postctrl = this;
      Parse.initialize("OtJJlIClBwmB2KgUmYw2G8IjkoSCHNbRac7V4nMB", "UEonv2bU7qauUguVNZetrKA49uR1NsGf5Ilc7IGW");
        var Post = Parse.Object.extend("Post");

      postctrl.addPost = function(){
        postctrl.posts.push(postctrl.newPost);
        var post = new Post();
        post.set("title",postctrl.newPost.title);
        post.set("description",postctrl.newPost.description);
        post.set("link",postctrl.newPost.link);

      post.save({
      success: function(object) {
        console.log("Post saved sucessfully");
      },
      error: function(model, error) {
        console.log("Error "+ error.message);
      }
      });

        postctrl.initializeNewPost();

      };

      function fetchPost(){
          var query = new Parse.Query(Post);
          var differedQuery = $q.defer();
          query.find().then(function(data){
            differedQuery.resolve(data);
          },function(error){
            differedQuery.reject(data);
          });
          differedQuery.promise
          .then(function(data){
              postctrl.posts = [];
              angular.forEach(data,function(obj){
                post = {};
                post.title = obj.get("title");
                post.description = obj.get("description");
                post.link = obj.get("link");
                postctrl.posts.push(post);
              });
          })
          .catch(function(error){
              console.log("Error in fetching "+error.message);
          })


      }

      postctrl.initializeNewPost = function(){
        postctrl.newPost = {};
      };

      postctrl.initializeNewPost();
      fetchPost();



    });

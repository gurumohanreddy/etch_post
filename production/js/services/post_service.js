angular.module('Etchpost')
  .service('PostServer',function($q){
    var PostServer = this;
    Parse.initialize("OtJJlIClBwmB2KgUmYw2G8IjkoSCHNbRac7V4nMB","UEonv2bU7qauUguVNZetrKA49uR1NsGf5Ilc7IGW");

    PostServer.postClass = Parse.Object.extend('Post');

          PostServer.create = function(title,description,link){

                var post = new PostServer.postClass();
                var youtube = "https://www.youtube.com/embed/"+(link.split('=')[1]);
                post.set("title",title);
                post.set("description",description);
                post.set("link",youtube);

                  post.save({
                  success: function(object) {
                    console.log("Post saved sucessfully");
                  },
                  error: function(model, error) {
                    console.log("Error "+ error.message);
                  }
                });

            };

            PostServer.delete = function(postobj){

                postobj.destroy({
                success: function(){
                  console.log("Deleted sucessfully");
                },
                error: function(){
                    console.log("error deleting "+error.message);
                }
                });
            };

            PostServer.fetch = function(){
                      PostServer.posts = [];
                  var differedQuery = $q.defer();
                  var query = new Parse.Query(PostServer.postClass);
                  query.find().then(function(data){
                    differedQuery.resolve(data);
                  },function(error){
                    differedQuery.reject(error);
                  });
                  differedQuery.promise
                  .then(function(data){
                      angular.forEach(data,function(obj){
                        post = {};
                        post.title = obj.get("title");
                        post.description = obj.get("description");
                        post.link = obj.get("link");
                        post.parseObject = obj;
                        PostServer.posts.push(post);
                         console.log(post);
                      });
                  })
                  .catch(function(error){
                      console.log("Error in fetching "+error.message);
                  })

                    return PostServer.posts;


            };


  });

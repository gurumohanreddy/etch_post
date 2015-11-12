angular.module('Etchpost')
      .service('AuthenticationService',function($state){

        var AuthenticationService =this;

        AuthenticationService.login = function(username,password){
              Parse.User.logIn(username,password,{
                  success: function(user){
                    console.log('Logged In as '+user.get('username'));
                    $state.go('newpost');
                  },
                  error:function(user,error){
                    console.log("Error logging in "+error.message);
                  }
              });

        };

        AuthenticationService.signup = function(username,password){
              Parse.User.signUp(username,password,null,{
                success: function(user){
                  console.log('Signed up as '+user.get('username'));
                  $state.go('newpost');
                },
                error:function(user,error){
                  console.log("Error signing in "+error.message);
                }
            });

        };


        AuthenticationService.logOut = function(){
          Parse.User.logOut();
          $state.go('login');
        };

        AuthenticationService.currentUser = function(){
          Parse.User.current();

        };

        AuthenticationService.loggedIn = function(){
            !!AuthenticationService.currentUser();
        };

        AuthenticationService.requireAuthentication = function(){
          if(AuthenticationService.loggedIn()){
            return true;

          }else{
            $state.go('login');
          }
        };

});

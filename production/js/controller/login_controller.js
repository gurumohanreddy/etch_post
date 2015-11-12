angular.module("Etchpost")
    .controller("LoginCtrl",function(PostServer){
      var loginctrl = this;

        function init(){
            loginctrl.initializeForms();
        };

        loginctrl.initializeForms = function(){
          loginctrl.loginUser = {};
          loginctrl.signupUser = {};

        };

          loginctrl.login = function(){
            var username = loginctrl.loginUser.username,
                password = loginctrl.loginUser.password;

              Parse.User.logIn(username,password,{
                  success: function(user){
                    console.log('Logged In as '+user.get('username'));
                  },
                  error:function(user,error){
                    console.log("Error logging in "+error.message);
                  }
              });

          };
          loginctrl.signup = function(){
            var username = loginctrl.signupUser.username,
                password = loginctrl.signupUser.password;
                Parse.User.signUp(username,password,null,{
                  success: function(user){
                    console.log('Signed up as '+user.get('username'));
                  },
                  error:function(user,error){
                    console.log("Error signing in "+error.message);
                  }
              });

          };


          init();

  });

angular.module("Etchpost")
    .controller("LoginCtrl",function(PostServer,$state,AuthenticationService){
      var loginctrl = this;

        function init(){
            redirectIfLoggedIn();
            loginctrl.initializeForms();
        };

        function redirectIfLoggedIn(){
          if(AuthenticationService.loggedIn()){
            $state.go('newpost');
          }

        };

        loginctrl.initializeForms = function(){
          loginctrl.loginUser = {};
          loginctrl.signupUser = {};

        };

          loginctrl.login = function(){
            var username = loginctrl.loginUser.username,
                password = loginctrl.loginUser.password;

                AuthenticationService.login(username,password);
          };
          loginctrl.signup = function(){
            var username = loginctrl.signupUser.username,
                password = loginctrl.signupUser.password;

                AuthenticationService.signup(username,password);
          };


          init();

  });

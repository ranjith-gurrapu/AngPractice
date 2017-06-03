/**
 * Created by nareshit on 6/1/2017.
 */


app.config(config);

config.$inject=["$stateProvider","$urlRouterProvider"];

function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("key_home",{Url: "/home/:id/:name/:age",
                                    templateUrl:"templates/home.html",
                                    controller : "home"})
        .state("key_about",{Url: "/about/:id/:name/:age",
            templateUrl:"templates/about.html",
            controller : "about"});
    $urlRouterProvider.otherwise("/home.html");

}

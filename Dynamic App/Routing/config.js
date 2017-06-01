/**
 * Created by nareshit on 6/1/2017.
 */


app.config(config);

config.$inject=["$routeProvider"];

function config($routeProvider) {
    $routeProvider.when("/key_home",{templateUrl: "templates/home.html", controller : "home"})
    .when("/key_about",{templateUrl: "templates/about.html", controller : "about"})
        .otherwise("/key_home",{templateUrl: "templates/home.html", controller : "home"});

}

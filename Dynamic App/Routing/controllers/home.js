/**
 * Created by nareshit on 6/1/2017.
 */

app.controller("home",home);

home.$inject=["$scope"]

function home($scope){
    $scope.var_home="Welcome to Home";
}

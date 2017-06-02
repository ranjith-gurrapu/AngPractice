/**
 * Created by nareshit on 6/1/2017.
 */

app.controller("home",home);

home.$inject=["$scope","$routeParams"]

function home($scope,$routeParams){
    $scope.var_home=$routeParams.param1+"..."+$routeParams.param2+".."+
        $routeParams.param3;
}

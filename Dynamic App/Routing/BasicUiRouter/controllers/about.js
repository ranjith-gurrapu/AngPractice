/**
 * Created by nareshit on 6/1/2017.
 */

app.controller("about",about);

about.$inject=["$scope","$routeParams"];

function about($scope,$routeParams){
    $scope.var_about=$routeParams.param1+"..."+$routeParams.param2+".."+
                        $routeParams.param3;
}
/**
 * Created by nareshit on 6/1/2017.
 */

app.controller("about",about);

about.$inject=["$scope","$stateParams"];

function about($scope,$stateParams){
    $scope.var_about=$stateParams.param1+"..."+$stateParams.param2+".."+
        $stateParams.param3;
}
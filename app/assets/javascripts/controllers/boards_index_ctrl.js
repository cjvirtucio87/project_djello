app.controller('BoardsIndexCtrl',
['$scope', 'boards', 'BoardService',
function($scope, boards, BoardService) {

  $scope.boards = boards;

  $scope.refreshBoards = function(data) {
    $scope.boards = data;
  };

  $scope.logError = function(reason) {
    console.log('ERROR!! Reason:');
    console.log(reason);
  };

  // Might not need these listeners anymore.
  $scope.$on('board.create', function(ev, response) {
    BoardService.refreshCache()
      .then($scope.refreshBoards)
      .catch($scope.logError);
  });

  $scope.$on('board.destroy', function(response) {
    BoardService.refreshCache()
      .then($scope.refreshBoards)
      .catch($scope.logError);
  });

}]);

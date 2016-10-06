app.factory('BoardService',
['Restangular', '_', function(Restangular,_) {

  var BoardService = {};
  var _boards = [];

  function _logError (reason) {
    console.log('ERROR!!! Reason: ');
    console.log(reason);
  }

  function _cacheBoards () {
    return Restangular.all('boards')
      .getList()
      .then(function(response) {
        return angular.copy(response, _boards);
      })
      .catch(_logError);
  }

  Restangular.extendModel('boards', function(model) {
    model.destroy = function() {
      console.log("i'm being destroyed!!!");
    };
    return model;
  });

  BoardService.refreshCache = function () {
    return _cacheBoards();
  };

  BoardService.all = function () {
    if (_.isEmpty(_boards)) {
      return _cacheBoards();
    } else {
      return _boards;
    }
  };

  BoardService.create = function (formParams) {
    return Restangular.all('boards').post({
      board: formParams
    });
  };

  return BoardService;

}]);

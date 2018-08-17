angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  return {
    search: function(options) {
      return $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search`
      })
    }
    // use then promise to update videos
  }
});

angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  return {
    search: function(q, cb) {
      return $http({
        url: `https://www.googleapis.com/youtube/v3/search`,
        method: 'GET',
        params: {part: 'snippet', key: window.YOUTUBE_API_KEY, maxResults: 5, query: q, data: 'video'}
      })
        .then((data) => {
          if (cb) {
            console.log(data);
            cb(data.items);
          }
        })
        .catch((err) => console.error(err));
    }
    // use then promise to update videos
  }
});

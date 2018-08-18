angular.module('video-player').service('youTube', function($http) {
  return {
    search: function(q, cb) {
      return $http({
        url: `https://www.googleapis.com/youtube/v3/search`,
        method: 'GET',
        params: {
          part: 'snippet',
          key: window.YOUTUBE_API_KEY,
          maxResults: 5,
          q: q,
          data: 'video'
        }
      })
        .then(({ data }) => {
          if (cb) {
            cb(data.items);
          }
        })
        .catch(err => console.error(err));
    }
  };
});

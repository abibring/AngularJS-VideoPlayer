angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    vidplayer: '<'
  },
  template: `
  <div class="video-player" ng-model="$ctrl.vidplayer">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" 
        ngSrc="https://www.youtube.com/embed/{{d.videoId}}" 
        allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{$ctrl.video.snippet.title}}</h3>
      <div>{{$ctrl.video.snippet.description}}</div>
    </div>
  </div>

  `,
  controller: 'videoplayerctrl'
})

.controller('videoplayerctrl', function() {
  this.video = window.exampleVideoData[0];
})

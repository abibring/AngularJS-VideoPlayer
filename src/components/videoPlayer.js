angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    vidplayer: '<'
  },
  template: `
  <div class="video-player" ng-model="$ctrl.vidplayer">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1w8Z0UOXVaY" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{window.exampleVideoData[0].snippet.title}}</h3>
      <div>Video Description</div>
    </div>
  </div>

  `
});

angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<'
  },
  template: `
    <ul class="video-list">
      <video-list-entry ng-repeat="video in $ctrl.videos" video="video" ng-click="$ctrl.onClick(video)"></video-list-entry>
    </ul>
    `,
  controller: 'videolistctrl'
})

.controller('videolistctrl', function() {
  this.onClick = onClick;
});
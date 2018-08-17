angular.module('video-player')
.component('videoList', {
  bindings: {
    videoList: '<'
  },
  template: `
    <ul class="video-list" ng-model="window.exampleVideoData">
      <video-list-entry ng-repeat="_item_ in $ctrl.videos track by $index" ng-click="$ctrl.onClick()"> component goes here</video-list-entry>
    </ul>
    `,
  controller: 'videolistctrl'
})

.controller('videolistctrl', function() {
  this.videos = window.exampleVideoData;
  this.onClick = function() {

  }
})
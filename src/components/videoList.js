angular.module('video-player')
.component('videoList', {
  bindings: {
    videoList: '<'
  },
  template: `
    <ul class="video-list" ng-controller="">
      <video-list-entry ng-repeat="_item_ in window.exampleVideoData track by $index" ng-model="window.exampleVideoData"> component goes here</video-list-entry>
    </ul>
    `,
  controller: function('') {

  }
});
angular
  .module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      handle: '<'
    },
    template: `
    <ul class="video-list">
      <video-list-entry 
      ng-repeat="video in $ctrl.videos" 
      video="video" 
      handle="$ctrl.handle">
      </video-list-entry>
    </ul>`,
    controller: 'videolistctrl'
  })

  .controller('videolistctrl', function() {});

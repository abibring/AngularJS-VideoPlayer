angular.module('video-player')

.component('app', {
  template: 
    `<div id="app container" ng-controller="AppCtrl">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search searchyoutube="$ctrl.searchResults"></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.currentVideo"></video-player>
        </div>
        <div class="col-md-5">
          <video-list 
          videos="$ctrl.videos" 
          currentVideo=""
          handle="$ctrl.selectVideo"></video-list>
        </div>
      <div>
    </div>
    `,
  controller: 'AppCtrl'
  })

.controller('AppCtrl', function(youTube) {
  // this.search = youTube;
  /*
  this.searchResults = youTube.search(this.userInput, (data) => {
    this.videos = data;
    this.video = data[0];
  });
*/
  this.searchResults = (data) => {
    this.videos = data;
    this.video = data[0];
  }
  this.selectVideo = (video) => {
    this.currentVideo = video;
  }
  this.currentVideo = window.exampleVideoData[0]
  this.videos = window.exampleVideoData;
})

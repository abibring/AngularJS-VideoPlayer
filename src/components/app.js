angular.module('video-player')

.component('app', {
  template: 
    `<div id="app container">
      <nav class="navbar" ng-controller="AppCtrl">
        <div class="col-md-6 col-md-offset-3">
          <search searchYoutube="$ctrl.result()"></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.currentVideo"></video-player>
        </div>
        <div class="col-md-5">
          <video-list videos="$ctrl.videos" onClick = "$ctrl.onClick"></video-list>
        </div>
      <div>
    </div>
    `,
  controller: 'AppCtrl'

  })

.controller('AppCtrl', function(youTube) {
  // this.search = youTube;
  this.result = function(q) {
    return youTube.search(q)
  }
  this.selectVideo = function() {
    
  };
  this.searchResults = function() {

  };
  this.onClick = function(video) {
    this.video = video;
  }
  this.currentVideo = window.exampleVideoData[0]
  this.videos = window.exampleVideoData;
})

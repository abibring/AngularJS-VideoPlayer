angular.module('video-player')

.component('search', {
  
  bindings: {
    searchYoutube: '<'
  },
  template: `
    <div class="search-bar form-inline" ng-controller="AppCtrl">
      <input class="form-control" type="text" ng-model="$ctrl.userInput"/>
      <button class="btn" ng-click="$ctrl.result()">
        <span class="glyphicon glyphicon-search"></span>
      </button>
      </div>
  `,
  controller: 'searchctr'
})

.controller('searchctr', function(youTube) {
  this.result = youTube.search(this.userInput, (data) => {
    this.videos = data;
    this.video = data[0];
  });
})
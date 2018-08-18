angular.module('video-player')

.component('search', {
  
  bindings: {
    searchyoutube: '<',
    handle: '<'
  },
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" ng-model="$ctrl.userInput"/>
      <button class="btn" ng-click="$ctrl.result()">
        <span class="glyphicon glyphicon-search"></span>
      </button>
      </div>
  `,
  controller: 'searchctr'
})

.controller('searchctr', function(youTube) {
  this.result = function() {
    youTube.search(this.userInput, this.searchyoutube);
  }
})
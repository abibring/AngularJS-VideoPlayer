angular.module('video-player')

.component('search', {
  /*
  bindings: {
    hello: '<'
  },
  */
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" />
      <button class="btn" ng-click="$ctrl.result()">
        <span class="glyphicon glyphicon-search"></span>
      </button>
      </div>

  `,
  controller: 'searchctr'
})

.controller('searchctr', function() {
  this.result = function() {
    //this.services.search();
  }
})
angular.module('video-player')

.component('search', {
  bindings: {
    TEMPNAME: '<'
  },
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" />
      <button class="btn">
        <span class="glyphicon glyphicon-search"></span>
      </button>
      </div>

  `
});

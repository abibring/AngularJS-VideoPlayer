angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    videoListEntry: '<'
  },
  template: `
    <li class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
      </div>
      <div class="media-body">
        <div class="video-list-entry-title" ng-model="window.exampleVideoData[0].snippet.title">Video Title</div>
        <div class="video-list-entry-detail" ng-model="window.exampleVideoData[0].snippet.description">Video Description</div>
      </div>
    </li>
  `
});

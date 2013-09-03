window.Gmail = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, $subEl, currentUser) {
    Gmail.currentUser = currentUser;
    var folders = new Gmail.Collections.Folders();
    folders.fetch({
      success: function(folderData) {
        new Gmail.Routers.GmailRouter($rootEl, $subEl, folderData)
        Backbone.history.start();
      },
      error: function(folderData) {
        debugger
      }
    });
  }
};
window.Gmail = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, $subEl, currentUser) {
    Gmail.currentUser = currentUser;
    Gmail.folders = new Gmail.Collections.Folders();
    Gmail.folderEmails = new Gmail.Collections.FolderEmails();
    Gmail.folders.fetch({
      success: function() {
        var inbox = Gmail.folders.get(1);
        inbox.save(); // I'm unaware why I have to do this. Backbone appears to bug out on my inbox folder.
        new Gmail.Routers.GmailRouter($rootEl, $subEl)
        Backbone.history.start();
      },
      error: function(folderData) {
        debugger
      }
    });
  }
};
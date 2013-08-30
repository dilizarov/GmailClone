window.Gmail = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, currentUser) {
    Gmail.currentUser = currentUser;
    var emails = new Gmail.Collections.Emails();
    emails.fetch({
      success: function(emailData) {
        new Gmail.Routers.GmailRouter($rootEl, emailData)
        Backbone.history.start();
      },
      error: function(emailData) {
        debugger
      }
    });
  }
};
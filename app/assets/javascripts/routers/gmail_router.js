Gmail.Routers.GmailRouter = Backbone.Router.extend({
  
  initialize: function($rootEl, $subEl, folderData) {
    this.$rootEl = $rootEl;
    this.$subEl = $subEl;
    this.folderData = folderData;
  },
  
  routes: {
    "" : "inbox",
    "emails/:id" : "showEmail"
  },
  
  inbox: function() { 
  
    var that = this;

    inboxFolder = this.folderData.findWhere({name: "Inbox"})
    inboxFolder.fetch({ success: function(folderData) {
      var emails = folderData.get('emails');
      var gmailInboxView = new Gmail.Views.GmailInboxView({
        collection: emails
      });
      
      that.$rootEl.html(gmailInboxView.render().$el);
    }, 
    error: function(folderData) {
      debugger
      console.log(folderData);
    }})
  
    },
  
  showEmail: function(id) {
    
    var that = this;
    var email = this.emailData.get(id);
    
    var gmailShowView = new Gmail.Views.GmailShowView({
      model: email
    });
    
    that.$rootEl.html(gmailShowView.render().$el);
  }
});
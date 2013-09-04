Gmail.Routers.GmailRouter = Backbone.Router.extend({
  
  initialize: function($rootEl, $subEl, folderData) {
    this.$rootEl = $rootEl;
    this.$subEl = $subEl;
    this.folderData = folderData;
    
    var gmailSidebarView = new Gmail.Views.GmailSidebarView({
      collection: folderData
    });
    
    this.$subEl.html(gmailSidebarView.render().$el);
  },
  
  routes: {
    "" : "showFolder",
    "emails/:id" : "showEmail",
    "folders/:id" : "showFolder"
  },
  
  inbox: function() { 
  
    var that = this;
    //We always redirect to inbox as root. Hence, no way to avoid default folder becoming inbox folder
    this.folder = this.folderData.findWhere({ name: "Inbox" })
    this.folder.fetch({ success: function(folderData) {
      var emails = folderData.get('emails');
      var gmailFolderView = new Gmail.Views.GmailFolderView({
        collection: emails
      });
      
      that.$rootEl.html(gmailInboxView.render().$el);
    }
  })
  
},
  
showEmail: function(id) {
   
  var that = this;
  var email = this.folder.get('emails').get(id)
    
  var gmailShowView = new Gmail.Views.GmailShowView({
    model: email
  });
    
  that.$rootEl.html(gmailShowView.render().$el);
},
  
showFolder: function(id) {
   
  if (!id) {var id = 1};
   
  var that = this;
  var folder = this.folderData.get(id)
  
  folder.fetch({
    success: function(folderData) {
      var emails = folderData.get('emails');
      var gmailFolderView = new Gmail.Views.GmailFolderView({
        collection: emails
      });
      that.$rootEl.html(gmailFolderView.render().$el);
    }
  });
}
});
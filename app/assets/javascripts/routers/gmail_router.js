Gmail.Routers.GmailRouter = Backbone.Router.extend({
  
  initialize: function($rootEl, $subEl) {
    this.$rootEl = $rootEl;
    this.$subEl = $subEl;
    
    var gmailSidebarView = new Gmail.Views.GmailSidebarView({
      collection: Gmail.folders
    });
    
    this.$subEl.html(gmailSidebarView.render().$el);
  },
  
  routes: {
    "" : "showFolder",
    "emails/:id" : "showEmail",
    "folders/:id" : "showFolder"
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
    
    var that = this;
    
    var showEmails = function () {
      var emails = that.folder.get('emails');
      var gmailFolderView = new Gmail.Views.GmailFolderView({
        collection: emails
      });
      
      that.$rootEl.html(gmailFolderView.render().$el);
    };
   
    if (!id) {var id = 1};
   
    this.folder = Gmail.folders.get(id)
  
    if (this.folder.get('emails').length) {
      showEmails();
    } else {
      this.folder.fetch({
        success: function(folderData) {
          showEmails();
        }
      });  
    }
  
  }
});
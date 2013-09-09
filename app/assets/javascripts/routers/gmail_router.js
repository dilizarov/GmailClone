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
    
    if (!id) {
      id = 1
      var firstFetch = true;
    }
     
    this.folder = Gmail.folders.get(id)
  
    this.folder.getEmails( function (emails) {
      
      // debugger
      
      var gmailFolderView = new Gmail.Views.GmailFolderView({
        collection: emails, folder: that.folder
      });
      
      if (firstFetch) {
        Gmail.folders.get(2).getEmails(function (emails) {
          that.$rootEl.html(gmailFolderView.render().$el)
        });
      } else {
        that.$rootEl.html(gmailFolderView.render().$el);
      }
    });
      
  }
});
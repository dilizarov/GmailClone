Gmail.Views.GmailSidebarView = Backbone.View.extend({
  
  render: function() {
    var that = this
    var filteredFolders = that.collection.filter( function (folder) {
      return folder.get('name') !== 'Unread';
    });
    var renderedContent = JST['gmail/sidebar']({ folders: filteredFolders })
    
    that.$el.html(renderedContent);
    
    return that;
  }
  
})
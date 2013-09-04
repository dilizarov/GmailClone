Gmail.Views.GmailFolderView = Backbone.View.extend({
  
  render: function() {
    var that = this;
    var currentTime = new Date(Date.now());
    
    var renderedContent = JST['gmail/folder']({ emails : that.collection, date: currentTime });
    
    that.$el.html(renderedContent);
    
    return that;
  }
})
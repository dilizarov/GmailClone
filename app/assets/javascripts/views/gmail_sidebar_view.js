Gmail.Views.GmailSidebarView = Backbone.View.extend({
  
  render: function() {
    var that = this
    var renderedContent = JST['gmail/sidebar']({ folders: that.collection })
    
    that.$el.html(renderedContent);
    
    return that;
  }
  
})
Gmail.Views.GmailInboxView = Backbone.View.extend({
  
  render: function() {
    var that = this;
    var currentTime = new Date(Date.now());
    
    var renderedContent = JST['gmail/inbox']({ emails : that.collection, date: currentTime });
    
    that.$el.html(renderedContent);
    
    return that;
  }
})
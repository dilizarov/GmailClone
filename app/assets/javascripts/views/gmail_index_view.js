Gmail.Views.GmailIndexView = Backbone.View.extend({
  
  render: function() {
    var that = this;
    var a = new Date(Date.now())
    
    var renderedContent = JST['gmail/index']({ emails : that.collection, date: a });
    
    that.$el.html(renderedContent);
    
    return that;
  }
})
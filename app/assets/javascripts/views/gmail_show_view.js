Gmail.Views.GmailShowView = Backbone.View.extend({
  
  render: function() {
    var that = this;
    
    var renderedContent = JST['gmail/show']({ email: that.model });
    
    that.$el.html(renderedContent);
    return that;
  }
})
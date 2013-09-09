Gmail.Views.GmailShowView = Backbone.View.extend({
  
  events: {
    "click .back" : "back"
  },
  
  render: function() {
    var that = this;
    
    var renderedContent = JST['gmail/show']({ email: that.model });
    
    that.$el.html(renderedContent);
    return that;
  },
  
  back: function() {
    
    event.preventDefault();
    window.history.back();
  }
})
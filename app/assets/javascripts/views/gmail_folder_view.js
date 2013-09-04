Gmail.Views.GmailFolderView = Backbone.View.extend({
  
  events: {
    "click .email": "folderEmail",
    "click .email [type = 'checkbox']": "star"
  },
  
  render: function() {
    var that = this;
    var currentTime = new Date(Date.now());
    
    var renderedContent = JST['gmail/folder']({ emails : that.collection, date: currentTime });
    
    that.$el.html(renderedContent);
    
    return that;
  },
  
  folderEmail: function() {
    event.preventDefault();
    
    var id = $(event.target.parentElement).attr('id');
    Backbone.history.navigate("#/emails/" + id);
  },
  
  star: function() {
    debugger
  }
})
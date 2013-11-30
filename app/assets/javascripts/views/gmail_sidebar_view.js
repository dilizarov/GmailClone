Gmail.Views.GmailSidebarView = Backbone.View.extend({
  
  events: {
    "click .sent" : "send"
  },
  
  render: function() {
    var that = this
    var filteredFolders = that.collection.filter( function (folder) {
      return folder.get('name') !== 'Unread';
    });
    var renderedContent = JST['gmail/sidebar']({ folders: filteredFolders })
    
    that.$el.html(renderedContent);
    
    return that;
  },
  
  send: function() {
    var myData = $('.sendEmail').serializeJSON();
    
    $.ajax({
      url: '/emails',
      type: 'POST',
      data: myData,
      dataType: "json",
      success: function(res) {
        console.log("oh yes!");
      },
      error: function(what) {
        console.log(what);
      }
    });
    
    return;
  }
  
})
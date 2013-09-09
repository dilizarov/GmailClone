Gmail.Views.GmailFolderView = Backbone.View.extend({
  
  // initialize: function() {
  //   this.listenTo(Gmail.folderEmails, "change", this.render);
  // }
  
  events: {
    "click .email": "folderEmail",
    "click .star": "star"
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
  
  star: function(event) {
    event.stopPropagation();
    
    var emailID = event.target.form.id;
    var thisEmail = this.collection.get(emailID);
    var starredFolder = Gmail.folders.find(
      function(folder) { return folder.get('name') === "Starred"}
    );
    
    if($(event.target).prop('checked')) {
      Gmail.folderEmails.push({folder_id: starredFolder.id, 
                               email_id: thisEmail.id});
     var latestJoin = Gmail.folderEmails.last();
     latestJoin.email = thisEmail;
     latestJoin.save();
    } else {
      var folderEmail = Gmail.folderEmails.find(function (join) {   
          return (join.get('folder_id') === starredFolder.id &&
          join.get('email_id') === thisEmail.id)
      });
      
      folderEmail.destroy();
      Gmail.folderEmails.remove(folderEmail);
        
    }
    
  }
 
})
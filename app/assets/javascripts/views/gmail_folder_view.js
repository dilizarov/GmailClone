Gmail.Views.GmailFolderView = Backbone.View.extend({
  
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
    var toggle = !thisEmail.get('starred');
    var starredFolder = Gmail.folders.find(
      function(folder) { return folder.get('name') === "Starred"}
    );
      
    thisEmail.set({starred: toggle}); 
    thisEmail.save();
    
    debugger
    
    Gmail.folderEmails.push({folder: starredFolder, email: thisEmail});
    Gmail.folderEmails.sync('create', this, {success: function() {
      console.log("Hell yeah!");
    }});
  }
})
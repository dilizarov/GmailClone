Gmail.Models.Folder = Backbone.Model.extend({
  urlRoot: '/folders',
  
  initialize: function() {
    this.fetched = false;
  },
  
  parse: function(data) {
  		var emailsCollection = new Gmail.Collections.Emails(data.emails)
  		data.emails = emailsCollection
      // debugger
      if (Gmail.folderEmails) {
        if (data.folder_emails) {
          _.each(data.folder_emails, function(folderEmail) {
            Gmail.folderEmails.push(folderEmail);
          }) 
        }
      } else {
        var joinCollect = new Gmail.Collections.FolderEmails(data.folder_emails)
        Gmail.folderEmails = joinCollect  
      }
      
      return data;
  	},

	toJSON: function() {
		var json = Backbone.Model.prototype.toJSON.call(this);

		json.emails = this.attributes.emails.toJSON();

		return json;
	},
  
  getEmails: function(callback) {
        
    var that = this;
    
    if (!this.fetched) {
      this.fetch({
        success: function(data) {
        that.fetched = true;
        that.get('emails').each( function(thisEmail) {
          var folderEmail = Gmail.folderEmails.find(function (join) {
              return (thisEmail.id === join.get('email_id') && 
                      that.id === join.get('folder_id'))
          });
          
          // debugger
          folderEmail.email = thisEmail;
          
        })
        
        callback(that.get('emails'));
        }
      })
    } else {
      
      that.get('emails').each( function (email) {
        var joinEl = Gmail.folderEmails.find( function (join) {
          return (that.id === join.get('folder_id') &&
                  email.id === join.get('email_id'))
        })
        
        if (!joinEl) that.get('emails').remove(email);
      })
      
      Gmail.folderEmails.each( function (join) {
        if (that.id === join.get('folder_id')) {
          that.get('emails').push(join.email)
        }
      })
      callback(that.get('emails'));
      }
    }
})
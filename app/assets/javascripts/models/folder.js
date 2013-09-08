Gmail.Models.Folder = Backbone.Model.extend({
  urlRoot: '/folders',
  
  initialize: function() {
    this.fetched = false;
  },
  
  parse: function(data) {
  		var emailsCollection = new Gmail.Collections.Emails(data.emails)
  		data.emails = emailsCollection
      
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
          Gmail.folderEmails.push({folder: that, email: thisEmail});
        })
        callback(that.get('emails'));
        }
      })
    } else {
      Gmail.folderEmails.each( function (join) {
        if (that.id === join.get('folder').id) {
          that.get('emails').push(join.get('email'))
        }
      })
      callback(that.get('emails'));
      }
    }
})
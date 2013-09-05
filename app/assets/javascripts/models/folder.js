Gmail.Models.Folder = Backbone.Model.extend({
  urlRoot: '/folders',
  
  parse: function(data) {
  		var emails_collection = new Gmail.Collections.Emails(data.emails)
  		data.emails = emails_collection
  		return data;
  	},

	toJSON: function() {
		var json = Backbone.Model.prototype.toJSON.call(this);

		json.emails = this.attributes.emails.toJSON();

		return json;
	},
  
  getEmails: function(callback) {
    
    var that = this;
    
    if (this.get('emails').length) {
      callback(that.get('emails'));
    } else {
      this.fetch({
        success: function(data) {
          callback(that.get('emails'));
        }
      });
    }
  }
  
  
})
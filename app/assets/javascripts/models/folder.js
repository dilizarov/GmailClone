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
    
    // if (this.get('emails').length) {
//       callback(that.get('emails'));
//     } else if (this.get('emails').length === 0 || this.hasChanged()){
//       this.fetch({
//         success: function(data) {
//           callback(that.get('emails'));
//         }
//       });
//     }
//     
//   
// var starred_folder = Gmail.folders.get(2);
// Gmail.folders.each(function (folder) {
//   folder.get('emails').each( function(email) {
//     if (email.get('starred')) starred_folder.get('emails').push(email);
//   })
// })
// 
// 
// 
//     if (this.get('emails').length === 0 ||
//         this.get('emails').find( function(email) { return email.hasChanged()})){
//           console.log("FETCH")
//       this.fetch({
//         success: function(data) {
//           callback(that.get('emails'));
//         }
//       });
//     } else if (this.get('emails').length){
//       console.log("NO FETCH")
//       callback(that.get('emails'));
//     }
//   }
//   
//   
// this.fetch({success: function(data) {
//   callback(that.get('emails'));
// }
// })

  if (!this.fetched) {
    this.fetch({
      success: function(data) {
      that.fetched = true;
      that.get('emails').each( function(thisEmail) {
        debugger
        Gmail.folderEmails.push({folder: that, email: thisEmail});
      })
      callback(that.get('emails'));
      }
    })
  } else {
    Gmail.folderEmails.each( function (join) {
      debugger
      if (that.id === join.get('folder').id) {
        that.get('emails').push(join.get('email'))
      }
    })
    callback(that.get('emails'));
    }
  }
})
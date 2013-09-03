Gmail.Models.User = Backbone.Model.extend({
  
  urlRoot: '/users',
  
  parse: function(data) {
    var emails_collection = new Gmail.Collections.Emails();
    data.emails = emails_collection;
    return data;
  },
  
  toJSON: function() {
    var json = Backbone.Model.prototype.toJSON.call(this);
    
    json.entries = this.attributes.entries.toJSON();
    return json;
  }
  
})
Gmail.Collections.Users = Backbone.Collection.extend({
  url: '/users',
  model: Gmail.Models.User
})
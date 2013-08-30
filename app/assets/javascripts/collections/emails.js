Gmail.Collections.Emails = Backbone.Collection.extend({
  url: '/emails',
  model: Gmail.Models.Email
})
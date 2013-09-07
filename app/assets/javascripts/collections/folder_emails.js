Gmail.Collections.FolderEmails = Backbone.Collection.extend({
  url: '/folderemails',
  model: Gmail.Models.FolderEmail
})
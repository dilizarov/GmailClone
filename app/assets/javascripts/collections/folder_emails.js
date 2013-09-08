Gmail.Collections.FolderEmails = Backbone.Collection.extend({
  url: '/folderjoins',
  model: Gmail.Models.FolderEmail
})
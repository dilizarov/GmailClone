Gmail.Collections.Folders = Backbone.Collection.extend({
  url: '/folders',
  model: Gmail.Models.Folder
})
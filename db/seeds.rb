# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

folder_names = ['Inbox', 'Starred', 'Sent Mail', 'Drafts', 'Spam', 'Trash', 'Unread']
folder_names.length.times do |i|
  Folder.create(name: folder_names[i])
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Folder.create(name: "Inbox")
Folder.create(name: "Starred")
Folder.create(name: "Sent Mail")
Folder.create(name: "Drafts")
Folder.create(name: "Spam")
Folder.create(name: "Trash")

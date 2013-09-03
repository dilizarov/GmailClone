class Folder < ActiveRecord::Base
  attr_accessible :name

  has_many :folder_emails,
           :class_name => "FolderEmail"
  has_many :emails, :through => :folder_emails
  has_many :user_folders,
           :class_name => "UserFolder"
  has_many :users, :through => :user_folders, :source => :user 

end

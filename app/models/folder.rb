class Folder < ActiveRecord::Base
  attr_accessible :name

  has_many :emails
  has_many :user_folders,
           :class_name => "UserFolder"
  has_many :users, :through => :user_folders, :source => :user 

end

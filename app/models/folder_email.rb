class FolderEmail < ActiveRecord::Base
  attr_accessible :email_id, :folder_id, :user_id

  belongs_to :user
  belongs_to :email
  belongs_to :folder
end

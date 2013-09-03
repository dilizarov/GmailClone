class FolderEmail < ActiveRecord::Base
  attr_accessible :email_id, :folder_id

  belongs_to :email
  belongs_to :folder
end

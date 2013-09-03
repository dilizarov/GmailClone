class UserFolder < ActiveRecord::Base
  attr_accessible :user_id, :folder_id

  belongs_to :user
  belongs_to :folder
end

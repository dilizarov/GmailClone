class Email < ActiveRecord::Base
  attr_accessible :content, :parent_email_id, :read, :recipient_id, :sender_id, :starred, :title
  
  belongs_to :sender,
  :class_name => "User"
  
  belongs_to :recipient,
  :class_name => "User"
  
end

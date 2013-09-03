class Email < ActiveRecord::Base
  attr_accessible :content, :parent_email_id, :read,
                  :recipient_id, :sender_address, :starred, 
                  :title, :folder_id
  
  default_scope order('updated_at DESC')
  
  belongs_to :sender,
  :class_name => "User",
  :foreign_key => :sender_address
  
  belongs_to :recipient,
  :class_name => "User"
  
  has_many :folder_emails,
  :class_name => "FolderEmail"
  has_many :folders, :through => :folder_emails
end

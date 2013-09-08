class Folder < ActiveRecord::Base
  attr_accessible :name

  has_many :folder_emails,
           :class_name => "FolderEmail"
  
  has_many :emails, :through => :folder_emails
  
  has_many :user_folders,
           :class_name => "UserFolder"
  has_many :users, :through => :user_folders, :source => :user 

  def get_emails(user)
    
    emails = self.emails.where("folder_emails.user_id = #{user.id}")
        
    # case folder_name
#     when "Inbox"
#       emails = self.emails.select { |email| email.recipient_id == user.id }
#     when "Starred"
#       emails = self.emails.select { |email| email.recipient_id == user.id ||                                                email.sender_address == user.email }
#     when "Sent Mail"
#       emails = self.emails.select { |email| email.sender_address == user.email }
#     else
#       emails = "I DIDN'T IMPLEMENT THAT YET"
#     end 

    emails
      
  end

end
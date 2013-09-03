class EmailProcessorController < ApplicationController

  def create
    
    user = params[:recipient]
    user = user[0...-24]
    user +='@gmaily.com'
    user = User.find_by_email(user)
    user = user.id
    
    folder = Folder.find_by_name('Inbox')
    email = Email.create(recipient_id: user, sender_address: params[:from],
                         title: params[:subject], content: params['body-plain'], 
                         starred: false, read: false, parent_email_id: -1)
                         
    FolderEmail.create(folder_id: folder.id, email_id: email.id)
                 
    head :ok
  end

end

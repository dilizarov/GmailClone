class EmailsController < ApplicationController

  def index
    @emails = Email.find_all_by_recipient_id(current_user.id)
    
    render :json => @emails
  end
  
  def create
    p "AND I DO BELIEVE"
    
    email = params['email']
    Mailer.email(email['recipients'], current_user.email, email['subject'], email['content']).deliver
     
     render :json => email
  end
  
  def update
    
    
    @email = Email.find(params[:id])
    starred_folder = Folder.find_by_name('Starred');
    starred = FolderEmail.find_by_folder_id_and_email_id(starred_folder.id, @email.id)
    
    if (params[:starred] && starred.nil?)
      FolderEmail.create(folder_id: starred_folder.id, email_id: @email.id)
      @email.update_attributes(starred: true)
    elsif (params[:starred] == false && starred)
      starred.destroy
      @email.update_attributes(starred: false)
    end
    
    render :json => @email
    
  end
  
end

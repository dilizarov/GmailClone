class EmailsController < ApplicationController

  def index
    @emails = Email.find_all_by_recipient_id(current_user.id)
    
    render :json => @emails
  end
  
  def create
    
  end
  
  def show
    
  end
  
  def update
    
    @email = Email.find(params[:id])
    starred_folder = Folder.find_by_name('Starred');
    starred = FolderEmail.find_by_folder_id_and_email_id(starred_folder.id, @email.id)
    if (params[:starred] && !starred)
      FolderEmail.create(folder_id: starred_folder.id, email_id: @email.id)
    elsif (!params[:starred] && starred)
      starred.destroy
    end
    
    render :json => @email
    
  end
  
  def destroy
    
  end
  
  def new
    
  end
  
  def edit
    
  end

end

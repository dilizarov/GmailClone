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
    
    if (params[:starred] && starred.nil?)
      p "HOWDY, I'M DAVID!"
      FolderEmail.create(folder_id: starred_folder.id, email_id: @email.id)
      @email.update_attributes(starred: true)
    elsif (params[:starred] == false && starred)
      p "ASTA LA BYEBYE"
      starred.destroy
      @email.update_attributes(starred: false)
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

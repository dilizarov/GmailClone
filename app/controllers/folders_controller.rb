class FoldersController < ApplicationController

  def index
    @folders = current_user.folders
    
    render :json => @folders  
  end
  
  def update
    @folder = Folder.find(params[:id])
    @folder.update_attributes(params[:folder])
    
    render :json => @folder
  end
  
  def show
    
    @folder = Folder.find(params[:id])
    @emails = @folder.get_emails(current_user)
    @folder_emails = FolderEmail.find_all_by_folder_id_and_user_id(params[:id], current_user.id)
    
    render 'show.rabl'
  end

end

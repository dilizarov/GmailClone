class FoldersController < ApplicationController

  def index
    @folders = current_user.folders
    
    render :json => @folders  
  end
  
  def show
    
    p params[:id]
    
    @folder = Folder.find(params[:id])
    @emails = @folder.get_emails(current_user)
    
    render 'show.rabl'
  end

end

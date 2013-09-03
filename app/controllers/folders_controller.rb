class FoldersController < ApplicationController

  def index
    @folders = current_user.folders
    
    render :json => @folders  
  end
  
  def show
    p params
    @folder = Folder.find(params[:id])
    p @folder
    @emails = @folder.emails.select { |email| email.recipient_id == current_user.id }
    p @emails
    
    p "OMG"
    
    render 'show.rabl'
  end

end

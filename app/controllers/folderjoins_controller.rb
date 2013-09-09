class FolderjoinsController < ApplicationController
  def create
    p "CREATE"
    information = {folder_id: params[:folder_id], email_id: params[:email_id], user_id: current_user.id}
    @join = FolderEmail.create(information)
    
    render :json => @join
  end

  def update
    p "UPDATE"
    p params
  end

  def destroy
    @join = FolderEmail.find(params[:id])  
    @join.destroy  
    
    render :json => @join
  end
end

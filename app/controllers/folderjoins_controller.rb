class FolderjoinsController < ApplicationController
  def create
    p "CREATE"
    information = {folder_id: params[:folder][:id], email_id: params[:email][:id], user_id: current_user.id}
    @join = FolderEmail.create(information)
    
    render :json => @join
  end

  def update
    p "UPDATE"
    p params
  end

  def destroy
    p "DESTROY"
    p params
  end
end

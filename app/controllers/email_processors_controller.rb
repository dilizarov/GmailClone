class EmailProcessorController < ApplicationController

  def create
    
    @user = params[:recipient]
    @user = @user[0...-24]
    @user += '@gmaily.com'
    @user = User.find_by_email(@user);
    
    Email.create(recipient_id: @user, sender_address: params[:from], title: params[:subject],
                 content: params['body-mime'], starred: false,
                 read: false, parent_email_id: -1);
                 
    head :ok
  end

end

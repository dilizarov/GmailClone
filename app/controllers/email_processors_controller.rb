class EmailProcessorController < ApplicationController

  def create
    
    user = params[:recipient]
    user = user[0...-24]
    user +='@gmaily.com'
    user = ser.find_by_email(@user);
    user = user.id
    
    Email.create(recipient_id: @user, sender_address: params[:from], title: params[:subject],
                 content: params['body-plain'], starred: false,
                 read: false, parent_email_id: -1);
                 
    head :ok
  end

end

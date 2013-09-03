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
    
  end
  
  def destroy
    
  end
  
  def new
    
  end
  
  def edit
    
  end

end

class SessionsController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  before_filter :require_current_user!, :only => [:destroy]

  def create
    unless params[:user][:email].end_with?("@gmaily.com")
      params[:user][:email] += "@gmaily.com"
    end
    
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user.nil?
      flash[:errors] = "Credentials were wrong"
      @user = User.new # To avoid nil.username error on sign in page.
      render 'new'
    else
      self.current_user = @user
      respond_to do |format|
        format.html { redirect_to root_url } # Entry point into Backbones app
        format.json { render :json => @user }
      end
    end
  end

  def destroy
    logout_current_user!
    redirect_to new_session_url
  end

  def new
    @user = User.new
  end
end
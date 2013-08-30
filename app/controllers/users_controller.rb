class UsersController < ApplicationController
  before_filter :require_current_user!, :only => [:show]
  before_filter :require_no_current_user!, :only => [:create, :new]

  def create
    @user = User.new(params[:user])

    if @user.save
      self.current_user = @user
      respond_to do |format|
        format.html { redirect_to root_url } # Entry point into Backbones app
        format.json { render :json => @user }
      end
    else
      flash.now[:errors] = @user.errors.full_messages
      render 'new'
    end
  end

  def new
    @user = User.new
    render 'new'
  end

  def show
    if params.include?(:id)
      @user = User.find(params[:id])
    else
      redirect_to user_url(current_user)
    end
  end
end
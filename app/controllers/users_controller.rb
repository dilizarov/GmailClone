class UsersController < ApplicationController
  before_filter :require_current_user!, :only => [:show]
  before_filter :require_no_current_user!, :only => [:create, :new]

  def create
    params[:user][:email] += '@gmaily.com'
    @user = User.new(params[:user])

    if @user.save
      self.current_user = @user
      6.times { |i|  UserFolder.create(user_id: @user.id, folder_id: i + 1)}
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
    @user.email = "@gmaily.com"
    render 'new'
  end

  def show
    if params.include?(:id)
      @user = User.find(params[:id])
    else
      render :json => "That user doesn't exist!", :status => 422
    end
  end
end
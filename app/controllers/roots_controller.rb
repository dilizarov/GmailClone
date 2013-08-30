class RootsController < ApplicationController

  before_filter :require_current_user!

  def show
    render 'show'
  end

end

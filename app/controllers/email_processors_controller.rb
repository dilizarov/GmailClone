class EmailProcessorsController < ApplicationController

  def create
    p params[:email]
    Email.create(params[:email])
  end

end

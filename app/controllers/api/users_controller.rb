class Api::UsersController < ApplicationController

  def index
    @users = User.all.includes(:created_projects, :backed_projects)
  end

  def show
    @user = User.find(params[:id])
  end


end

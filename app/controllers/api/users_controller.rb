class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render json: "New user created."
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: "ERROR"
    end
  end

  def index
    @users = User.all.includes(:created_projects, :backed_projects)
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end


end

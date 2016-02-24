class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      log_in!(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username/password combination."]
      render :new
    end
  end

  def current
    if signed_in?
      @user = current_user
    else
      render json: "No current user."
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end

end

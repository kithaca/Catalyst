class Api::SessionsController < ApplicationController
  def new
  end

  def create
    # debugger
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      log_in!(user)
      render json: {}
    end
  end

  def current
    if signed_in?
      @user = current_user
      # render json: {message: ""}
    else
      render json: {}
    end
  end

  def destroy
    log_out!
    render json: {message: "Logged out."}
  end

end

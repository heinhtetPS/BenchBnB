class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render json: @user
    else
      flash.now[:errors] = ["Invalid username/password"]
      render json: flash.now[:errors], status: 422
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: {}
    else
      flash.now[:errors] = ["There is no user to log out"]
      render json: flash.now[:errors], status: 404
    end
  end

end

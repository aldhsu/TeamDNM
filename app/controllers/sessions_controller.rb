class SessionsController < ApplicationController

  before_action :check_if_logged_in, :except => [:new, :create]
  before_action :check_if_admin, :only => [:index]

  def new
  end

  def create
    # raise params.inspect
    user = User.find_by(:username => params[:username])
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      @user
      render json: user.username
    else
      redirect_to login_path
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private

  #chech if the user is logged in
  #loads the smart navs
  def check_if_logged_in
    redirect_to(new_user_path) if @current_user.nil?
  end

  #do we need this? I dont know. . .
  def check_if_admin
    redirect_to(root_path) unless @current_user.is_admin?
  end
end
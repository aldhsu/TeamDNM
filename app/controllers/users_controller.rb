class UserController < ApplicationController
  def index
      @user = User.new
    end

  def create
    @user = User.new user_params
    if @user.save
      redirect_to root_path
    end
  end

    def index
      @users = User.all
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
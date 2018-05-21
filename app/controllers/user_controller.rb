class UserController < ApplicationController



  def index
  end

  def list
    users = User.all
    # respond_to do |format|
    #   format.json {render :json => @users }
    # end
    render json: users
  end

  def new
    user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render 'new'
    end
  end




  private

  def user_params
    params.require(:user).permit(:name, :surname, :date_of_birth)
  end
end

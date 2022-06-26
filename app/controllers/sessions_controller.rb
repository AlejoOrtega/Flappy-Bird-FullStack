class SessionsController < ApplicationController

    #autologin user
    def show
      user = User.find(session[:user_id])
      render json: user, status: :ok
    end

    #login user
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok  
      else
          render json: {error: 'Username or Password Incorrect'}, status: :unauthorized
      end
    end

    #logout user
    def delete
      session.delete(:user_id)
      head :no_content, status: :ok
    end

     
end

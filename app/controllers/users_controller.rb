class UsersController < ApplicationController

    #Create a new user
    def create
          new_user = User.create(user_params)
          if new_user.valid?
            session[:user_id] = new_user.id
            render json: new_user, status: :created
          else
            render json: {error: new_user.errors.full_messages}, status: :unprocessable_entity
          end
    end

    #PATCH ROUTES
    #update new username
    def update
        user = User.find(session[:user_id]) 
        user.update(username: params[:username])
        if user.valid?
            render json: user, status: :ok
        else
            render json: {error: user.errors.full_messages}, status: :unprocesable_entity
        end
    end

  #DELETE ROUTES
  #delete a user
    def destroy
        response = User.find(session[:user_id]).destroy
        session.delete(:user_id)
        head :no_content, status: :ok
    end

  
end

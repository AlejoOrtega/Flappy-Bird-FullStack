class ScoresController < ApplicationController
    #shows all the scores
    def index
        response = Score.joins("inner join users on scores.user_id = users.id").order('score DESC').take(20)
        render json: response, status: :ok
    end

    #scores of a user
    def show
        scores = User.find(session[:user_id]).scores.order("score DESC")
        render json: scores, status: :ok
    end

    #create a new score
    def create
        user = User.find(session[:user_id])
        score = Score.create(score: params[:score], user_id: user.id)
        render json: score, status: :ok
    end
end

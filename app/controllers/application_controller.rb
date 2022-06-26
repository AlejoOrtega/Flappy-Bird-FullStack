class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    private

    def record_not_found
        render json: {error: 'Record not found'}, status: :not_found
    end

    def user_params
        params.permit(:username, :password, :password_confirmation )
    end
end

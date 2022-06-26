Rails.application.routes.draw do
  #sessions controller
  get '/autologin', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

  #users controller
  post '/users', to: 'users#create'
  patch '/users', to: 'users#update'
  delete '/users', to: 'users#destroy'

  #scores controller
  get '/scores', to: 'scores#index'
  get '/users/scores', to: 'scores#show'
  post '/scores', to: 'scores#create'



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

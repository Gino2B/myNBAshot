Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/users/verify", to: "users#verify"
  post "/users/login", to: "users#login"
  put "/users/:id/add_player", to: "users#add_player_to_user"
  get "/users/:id", to: "users#show"
  resources :users, only: [:create]
  put "/players/:id/add_moment", to: "players#add_moment_to_player"
  resources :players
  resources :moments
end

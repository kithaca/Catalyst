Rails.application.routes.draw do

  root "static_pages#root"

  resources :users, only: [:new, :create]

  namespace :api, defaults: {format: :json} do

    get "session/current", to: "sessions#current"

    resource :session, only: [:new, :create, :destroy]
    resources :projects, only: [:create, :destroy, :index, :show, :update]
    resources :users, only: [:index, :show]
  end

end

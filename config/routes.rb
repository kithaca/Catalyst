Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    get "session/current", to: "sessions#current"

    resource :session, only: [:new, :create, :destroy]
    resources :projects, only: [:create, :destroy, :index, :show, :update]
    resources :users, only: [:index, :show, :create]
    resources :categories, only: [:index]
    resources :project_backings, only: [:create]
    
  end

end

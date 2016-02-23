Rails.application.routes.draw do

  root "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:create, :destroy, :index, :show, :update]
    resources :users, only: [:index, :show]
  end

end

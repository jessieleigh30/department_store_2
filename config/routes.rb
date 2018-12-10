Rails.application.routes.draw do
  namespace :api do
    resources :departments do
      resources :items do
      end
    end
  end
end

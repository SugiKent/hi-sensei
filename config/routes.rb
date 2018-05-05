Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/auth/:provider/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  root 'home#index'

  get 'questions', to: 'questions#index'
  get 'question/*path', to: 'questions#index'

  namespace :api, format: 'json' do
    namespace :v1  do
      resources :questions
      resources :question_contents
    end
  end

end

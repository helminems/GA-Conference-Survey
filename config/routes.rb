Rails.application.routes.draw do
  resources :users
  get '/graph', to: 'surveys#graph'
  get '/report', to: 'surveys#report'

  get '/form/:id', to: 'surveys#edit' # show survey form
  post '/form/:id', to: 'surveys#update' # update survey
  get '/thank_you', to: 'surveys#show'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  get '/completed', to: 'surveys#completed'

  root 'surveys#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

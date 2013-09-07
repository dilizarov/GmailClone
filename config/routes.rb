Gmail::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resources :emails
  resources :folders
  resources :folderemails, :only => [:create, :destroy]
  
  resource :session, :only => [:create, :destroy, :new]
  resource :root
  resources :email_processor, :only => [:create]
  
  root :to => "roots#show"
end

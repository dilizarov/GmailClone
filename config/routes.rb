Gmail::Application.routes.draw do

  resources :users, :only => [:create, :new, :show]
  resources :emails
  
  resources :folders
  resources :folderjoins, :only => [:create, :destroy, :update]
  
  resource :session, :only => [:create, :destroy, :new]
  resource :root
  resources :email_processor, :only => [:create]
  
  
  root :to => "roots#show"
end

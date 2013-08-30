Gmail::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resources :emails
  
  resource :session, :only => [:create, :destroy, :new]
  resource :root
  
  root :to => "roots#show"
end

Spree::Core::Engine.routes.draw do
  # Add your extension routes here
  get '/about', to: 'home#about'
end

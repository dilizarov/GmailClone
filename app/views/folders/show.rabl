object @folder
attributes :id, :name

child(@emails) do
  attributes :id, :content, :parent_email_id, :read, 
             :recipient_id, :sender_address, :starred,
             :title, :created_at, :updated_at
end
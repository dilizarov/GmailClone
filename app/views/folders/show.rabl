object @folder
attributes :id, :name

child(@emails) do
  attributes :id, :content, :parent_email_id, :read, 
             :recipient_id, :sender_address, :starred,
             :title, :created_at, :updated_at
end

child(@folder_emails) do
  attributes :folder_id, :email_id, :id
end
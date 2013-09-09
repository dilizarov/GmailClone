object @user
attributes :username, :session_token

child(:received_emails) do
  attributes :content, :parent_email_id, :read, :recipient_id, :sender_id, :title
end
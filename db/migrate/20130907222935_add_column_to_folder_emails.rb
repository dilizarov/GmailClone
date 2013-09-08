class AddColumnToFolderEmails < ActiveRecord::Migration
  def change
    add_column :folder_emails, :user_id, :integer
  end
end

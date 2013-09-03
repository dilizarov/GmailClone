class CreateFolderEmails < ActiveRecord::Migration
  def change
    create_table :folder_emails do |t|
      t.integer :folder_id
      t.integer :email_id

      t.timestamps
    end
    add_index :folder_emails, :folder_id
    add_index :folder_emails, :email_id
  end
end

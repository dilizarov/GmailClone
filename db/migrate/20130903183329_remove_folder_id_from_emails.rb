class RemoveFolderIdFromEmails < ActiveRecord::Migration
  def up
    remove_column :emails, :folder_id
  end

  def down
    add_column :emails, :folder_id, :integer
  end
end

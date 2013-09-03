class CreateUserFolders < ActiveRecord::Migration
  def change
    create_table :user_folders do |t|

      t.integer :user_id, :null => false
      t.integer :folder_id, :null => false

      t.timestamps
    end
    
    add_index :user_folders, :user_id
    add_index :user_folders, :folder_id
  end
end

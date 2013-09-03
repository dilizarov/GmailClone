class AddColumnToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :folder_id, :integer
  end
end

class RemoveStarredFromEmails < ActiveRecord::Migration
  def up
    remove_column :emails, :starred
  end

  def down
    add_column :emails, :starred, :boolean
  end
end

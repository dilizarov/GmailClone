class ChangeColumnNameInUsers < ActiveRecord::Migration
  def up
    rename_column :users, :username, :email
  end

  def down
  end
end

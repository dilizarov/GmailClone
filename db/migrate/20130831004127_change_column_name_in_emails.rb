class ChangeColumnNameInEmails < ActiveRecord::Migration
  def up
    rename_column :emails, :sender_id, :sender_address
  end

  def down
  end
end

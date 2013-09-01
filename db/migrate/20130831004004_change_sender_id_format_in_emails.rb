class ChangeSenderIdFormatInEmails < ActiveRecord::Migration
  def up
    change_column :emails, :sender_id, :string
  end

  def down
  end
end

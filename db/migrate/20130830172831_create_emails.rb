class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.integer :recipient_id
      t.integer :sender_id
      t.string :title
      t.text :content
      t.integer :parent_email_id
      t.boolean :starred
      t.boolean :read

      t.timestamps
    end
    add_index :emails, :recipient_id
    add_index :emails, :sender_id
    add_index :emails, :parent_email_id
  end
end

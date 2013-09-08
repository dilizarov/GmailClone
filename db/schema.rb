# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130907222935) do

  create_table "emails", :force => true do |t|
    t.integer  "recipient_id"
    t.string   "sender_address"
    t.string   "title"
    t.text     "content"
    t.integer  "parent_email_id"
    t.boolean  "starred"
    t.boolean  "read"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "emails", ["parent_email_id"], :name => "index_emails_on_parent_email_id"
  add_index "emails", ["recipient_id"], :name => "index_emails_on_recipient_id"
  add_index "emails", ["sender_address"], :name => "index_emails_on_sender_id"

  create_table "folder_emails", :force => true do |t|
    t.integer  "folder_id"
    t.integer  "email_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "user_id"
  end

  add_index "folder_emails", ["email_id"], :name => "index_folder_emails_on_email_id"
  add_index "folder_emails", ["folder_id"], :name => "index_folder_emails_on_folder_id"

  create_table "folders", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "folders", ["name"], :name => "index_folders_on_name"

  create_table "user_folders", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "folder_id",  :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "user_folders", ["folder_id"], :name => "index_user_folders_on_folder_id"
  add_index "user_folders", ["user_id"], :name => "index_user_folders_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_username"
  add_index "users", ["session_token"], :name => "index_users_on_session_token"

end

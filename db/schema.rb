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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160302184259) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "categories", ["name"], name: "index_categories_on_name", using: :btree

  create_table "project_backings", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.integer  "backer_id",  null: false
    t.integer  "pledge_amt", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "project_backings", ["backer_id"], name: "index_project_backings_on_backer_id", using: :btree
  add_index "project_backings", ["project_id"], name: "index_project_backings_on_project_id", using: :btree

  create_table "project_categories", force: :cascade do |t|
    t.integer  "category_id", null: false
    t.integer  "project_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "project_categories", ["category_id"], name: "index_project_categories_on_category_id", using: :btree
  add_index "project_categories", ["project_id"], name: "index_project_categories_on_project_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "category",    null: false
    t.integer  "creator_id",  null: false
    t.text     "description", null: false
    t.integer  "goal_amt",    null: false
    t.date     "start_date",  null: false
    t.date     "deadline",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "tagline",     null: false
    t.string   "image_url"
  end

  add_index "projects", ["category"], name: "index_projects_on_category", using: :btree
  add_index "projects", ["creator_id"], name: "index_projects_on_creator_id", using: :btree
  add_index "projects", ["title"], name: "index_projects_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

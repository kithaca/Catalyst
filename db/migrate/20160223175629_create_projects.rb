class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.integer :creator_id, null: false
      t.text :description, null: false
      t.integer :goal_amt, null: false
      t.date :start_date, null: false
      t.date :deadline, null: false

      t.timestamps
    end
    
    add_index :projects, :title
    add_index :projects, :category
    add_index :projects, :creator_id
  end
end

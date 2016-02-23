class CreateProjectBackings < ActiveRecord::Migration
  def change
    create_table :project_backings do |t|
      t.integer :project_id, null: false
      t.integer :backer_id, null: false
      t.integer :pledge_amt, null: false

      t.timestamps
    end
    add_index :project_backings, :project_id
    add_index :project_backings, :backer_id
  end
end

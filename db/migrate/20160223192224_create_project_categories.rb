class CreateProjectCategories < ActiveRecord::Migration
  def change
    create_table :project_categories do |t|
      t.integer :category_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :project_categories, :category_id
    add_index :project_categories, :project_id
  end
end

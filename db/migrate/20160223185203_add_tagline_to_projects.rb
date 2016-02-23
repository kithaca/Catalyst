class AddTaglineToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :tagline, :string, null: false
  end
end

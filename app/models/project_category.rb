# == Schema Information
#
# Table name: project_categories
#
#  id          :integer          not null, primary key
#  category_id :integer          not null
#  project_id  :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class ProjectCategory < ActiveRecord::Base

  validates :category_id, :project_id, presence: true

  belongs_to :project
  belongs_to :category

end

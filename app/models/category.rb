# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class Category < ActiveRecord::Base

  validates :name, presence: true

  has_many :project_categories
  has_many :projects,
    through: :projects,
    source: :project

end

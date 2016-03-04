# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  category    :string           not null
#  creator_id  :integer          not null
#  description :text             not null
#  goal_amt    :integer          not null
#  start_date  :date             not null
#  deadline    :date             not null
#  created_at  :datetime
#  updated_at  :datetime
#  tagline     :string           not null
#  image_url   :string
#

class Project < ActiveRecord::Base

  validates :creator_id, :title, :category, :tagline, :description,
    :goal_amt, :start_date, :deadline, :creator, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: User

  has_many :backings,
    foreign_key: :project_id,
    primary_key: :id,
    class_name: ProjectBacking

  has_many :backers,
    through: :backings,
    source: :backer

  has_one :project_category

  def self.filter(query_string)
    filtered_projects = Project.find_by_sql("
      SELECT projects.*
      FROM projects
      WHERE UPPER(projects.title) LIKE UPPER('%#{query_string}%')
      OR UPPER(projects.tagline) LIKE UPPER('%#{query_string}%')
      OR UPPER(projects.description) LIKE UPPER('%#{query_string}%')
      OR UPPER(projects.category) LIKE UPPER('%#{query_string}%')
    ")

    filtered_projects
  end

  def self.filter_by_category(category)
    filtered_projects = Project.where("category = '#{category}'")

    filtered_projects
  end

# TODO: need custom validation to ensure start_date is not after deadline
# TODO: need to keep track of funds and whether goal has been fulfilled


end

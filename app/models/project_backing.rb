# == Schema Information
#
# Table name: project_backings
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  backer_id  :integer          not null
#  pledge_amt :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class ProjectBacking < ActiveRecord::Base

  validates :project_id, :backer_id, :pledge_amt, presence: true

  belongs_to :project

  belongs_to :backer,
    foreign_key: :backer_id,
    primary_key: :id,
    class_name: User

end

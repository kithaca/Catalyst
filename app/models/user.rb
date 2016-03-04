# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :created_projects,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: Project

  has_many :backings,
    foreign_key: :backer_id,
    primary_key: :id,
    class_name: ProjectBacking

  has_many :backed_projects,
    through: :backings,
    source: :project


  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
  self.session_token = SecureRandom.urlsafe_base64
  self.save!
  self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def unique_created_projects
    unique_ids = []
    proj_ids = []
    unique_projects = []

    self.created_projects.each do |project|
      proj_ids << project.id
    end

    proj_ids.each do |id|
      if !unique_ids.include?(id)
        unique_ids << id
      end
    end

    unique_ids.each do |id|
      self.created_projects.each do |project|
        if id == project.id
          unique_projects << project
          break
        end
      end
    end

    unique_projects
  end

  def unique_backed_projects
    unique_ids = []
    proj_ids = []
    unique_projects = []

    self.backed_projects.each do |project|
      proj_ids << project.id
    end

    proj_ids.each do |id|
      if !unique_ids.include?(id)
        unique_ids << id
      end
    end

    unique_ids.each do |id|
      self.backed_projects.each do |project|
        if id == project.id
          unique_projects << project
          break
        end
      end
    end

    unique_projects
  end

end

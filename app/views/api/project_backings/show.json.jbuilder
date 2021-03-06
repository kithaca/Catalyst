json.extract! @project, :id, :title, :tagline, :category, :description,
  :goal_amt, :start_date, :deadline, :image_url, :creator

json.pledged @project.backings.sum(:pledge_amt)
json.total_backers @project.backers.length

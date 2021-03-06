json.array! @projects do |project|

  json.id project.id
  json.image_url project.image_url
  json.title project.title
  json.tagline project.tagline
  json.category project.category
  json.creator project.creator
  json.description project.description
  json.goal_amt project.goal_amt
  json.start_date project.start_date
  json.deadline project.deadline
end

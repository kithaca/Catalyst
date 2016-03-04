json.extract! @current_user, :username

json.created_projects @current_user.unique_created_projects
json.backed_projects @current_user.unique_backed_projects

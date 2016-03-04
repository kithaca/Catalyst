class Api::ProjectBackingsController < ApplicationController

  def create
    username = params[:project_backing][:backer_username]
    user = User.find_by_username(username)
    @project_backing = ProjectBacking.new(project_backing_params)
    @project_backing[:backer_id] = user.id
    if @project_backing.save
      project = Project.find(@project_backing.project_id)
      render json: project
    else
      # render json: {errors: @project.errors.full_messages}
    end
  end

  private
  def project_backing_params
    params.require(:project_backing).permit(:project_id, :pledge_amt)
  end

end

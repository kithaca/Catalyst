class Api::ProjectsController < ApplicationController

  def new
  end


  def create
    @project = Project.new(project_params)
    username = params[:project][:creator_name]
    user = User.find_by_username(username)
    @project["creator_id"] = user.id;
    if @project.save
      render json: @project
    else
      # render json: {errors: @project.errors.full_messages}
    end
  end

  def index
    @projects = Project.includes(:creator, :backers, :backings)
  end

  def show
    @project = Project.includes(:creator, :backers, :backings).find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :index
  end

  private
  def project_params
    params.require(:project).permit(:title, :category, :tagline,
      :description, :goal_amt, :start_date, :deadline)
  end

end

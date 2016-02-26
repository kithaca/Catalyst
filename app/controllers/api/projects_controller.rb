class Api::ProjectsController < ApplicationController

  def new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    @projects = Project.includes(:backers).all
  end

  def show
    @project = Project.includes(:backers, :backings).find(params[:id])
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
    params.require(:project).permit(:title, :category, :description,
      :goal_amt, :start_date, :deadline)
  end

end

# Phase 2: Project model, API, basic APIUtil, and Flux scaffold (2 days)

## Rails
### Models

### Controllers
* Api::ProjectsController (create, new, destroy, index, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* projects/new.html.erb
* projects/index.json.jbuilder
* projects/show.json.jbuilder

## Flux
### Views (React Components)
* ProjectsIndex
  - ProjectDetail
* NewProjectForm
* BackedProjects
* CreatedProjects

### Stores
* Project

### Actions
* ApiActions.receiveAllProjects -> triggered by ApiUtil
* ApiActions.receiveOneProject
* ApiActions.deleteProject

### ApiUtil
* ApiUtil.fetchAllProjects
* ApiUtil.fetchOneProject
* ApiUtil.createProject
* ApiUtil.editProject
* ApiUtil.destroyProject

## Gems/Libraries
* Flux Dispatcher (npm)

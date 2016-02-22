# Phase 3: Flux Architecture and Router (3 days)

## Rails
### Models
* Project

### Controllers
* Api::ProjectsController (create, destroy, index, show, update)

### Views
* projects/index.json.jbuilder (can be filtered by category)
* categories/index.json.jbuilder

## Flux
### Views (React Components)
* ProjectsIndex
  - ProjectDetail
* NewProjectForm
* SearchProjects

### Stores
* ProjectStore

### Actions
* ApiActions.receiveAllProjects -> triggered by ApiUtil
* ApiActions.receiveOneProject
* ApiActions.deleteProject
* ProjectActions.fetchAllProjects -> triggers ApiUtil
* ProjectActions.fetchOneProject
* ProjectActions.createProject
* ProjectActions.editProject
* ProjectActions.destroyProject

### ApiUtil
* ApiUtil.fetchAllProjects
* ApiUtil.fetchOneProject
* ApiUtil.createProject
* ApiUtil.editProject
* ApiUtil.destroyProject

## Gems/Libraries

# Flux Stores

### ProjectStore

Holds all persisted project data.

##### Actions:
- `receiveAllProjects`
- `receiveOneProject`
- `destroyProject`
- `receiveAllCreatedProjects`
- `receiveAllBackedProjects`

##### Listeners:
- `ProjectsIndex` (passes to `ProjectIndexItem` via props)
- `ProjectDetail`

### ProjectFormStore

Holds un-persisted note data to send to the API.

##### Actions:
- `receiveProjectFormParams`

##### Listeners:
- `ProjectForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`

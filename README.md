# Catalyst

Heroku link:

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Catalyst is a web app inspired by KickStarter, built using Ruby on Rails and React.js. Catalyst is a platform where users can view, share, and fund science research projects. Catalyst allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Explore and fund existing research projects
- [ ] Create new research projects
- [ ] Follow/track projects of interest

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Project model, API, basic APIUtil, and Flux scaffold (2 days)

**Objective:** Projects can be created, read, edited and destroyed through the API.

- [ ] create `Project` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for projects (`ProjectsController`)
- [ ] jBuilder views
- [ ] set up Webpack & Flux scaffold
- [ ] set up `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (3 days)

**Objective:** Projects can be created, read, edited and destroyed through the user interface.

- [ ] set up the flux loop with skeleton files
- [ ] set up React Router
- [ ] search page functionality
- implement each project component, building out the flux loop as needed.
  - [ ] `ProjectsIndex`
  - [ ] `ProjectIndexItem`
  - [ ] `NewProjectForm`

### Phase 4: Styling (1 day)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] make signup/signin appear on top of home page
- [ ] make home page photo scrollable
- [ ] polish styles

### Phase 5: Userpage customization (1 day)

**Objective:** Users can view projects they have backed, projects they have created, and projects they have followed

- [ ] Create user specific ProjectStore (?)
- Use CSS to style new views

Phase 3 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.

### Phase 6: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and well-used.

- [ ] Get feedback on my UI from others
- [ ] Add seed data (potentially pull from public APIs?)
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Pagination / infinite scroll for Projects Index
- [ ] Reminders/notifications for followed projects
- [ ] "Suggested" or "favorite" projects

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

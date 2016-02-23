# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Projects

- `GET /api/projects`
  - Projects index/search
  - only shows projects within selected category
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### User-Specific Projects
- `GET /api/:id/created`
- `POST /api/:id/created`
- `PATCH /api/:id/created`
- `DELETE /api/:id/created`
- `GET /api/:id/backed`
- `POST /api/:id/backed`

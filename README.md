# Catalyst

[Link to live website][link]
[link]: http://www.catalyze.tech

## Description

Catalyst is a web app inspired by KickStarter and built using Ruby on Rails and React.js. Catalyst is a platform where users can view, share, and fund science research projects. Catalyst allows users to:

* Create an account
* Log in / Log out
* Explore projects by category
* Search projects
* Fund projects
* Create new research projects

## Features
* Secure custom authentication system that hashes/salts passwords using BCrypt
* Cloudinary API for image upload
* Single-page sign up and login
* Guest user login for exploration
* Search from any page

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

## Screenshots

#### Homepage
![homepage](http://res.cloudinary.com/catalyst/image/upload/v1457939512/Homepage_zmkqrb.png)

#### Log In
![login_form](http://res.cloudinary.com/catalyst/image/upload/v1457939509/logIn_ptxeh2.png)

#### Projects Index
![project_index](http://res.cloudinary.com/catalyst/image/upload/v1457939510/projectIndex_vpemgo.png)

#### Categories
![categories](http://res.cloudinary.com/catalyst/image/upload/v1457939509/categories_ujpui6.png)

#### Project Detail
![categories](http://res.cloudinary.com/catalyst/image/upload/v1457939509/projectDetail_uutmh8.png)

#### Profile Page
![profile](http://res.cloudinary.com/catalyst/image/upload/v1457939509/Profile_hidxuh.png)

#### Create New Project
![new_project_form](http://res.cloudinary.com/catalyst/image/upload/v1457939510/newProjectForm_lmx14o.png)

## Future Features (TBD)
* User profile page customization (can link from project show page)
* Pagination / infinite scroll for Projects Index
* Reminders/notifications for project updates
* "Rewards" for being a philanthropist
* "Suggested" or "favorite" projects

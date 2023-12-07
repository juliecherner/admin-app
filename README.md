# Admin App

## Frontend

The project represents a simple admin panel that can manage the users, add and delete them as well as change their properties.

## Technologies

- React.js + Hooks, React Router
- MUI, CSS

## Functionality

- login for admin
- add user
- delete user
- add/delete users' todos

## Storing data in browser

- local storage : name of admin, hidden password (in format \*\*\*\*)
- cookies : JSON Web Token

## Backend

- authencitate all routes with token
- add/delete user
- get user's todos/contacts/pros and cons (table of qualities)
- add/delete todo/contact/quality

## Technologies

- Node.js
- Express
- typeorm
- PostgreSQL
- Docker
- JWT
- Bcrypt

## Migrations

**Create migration**

```sh
cd server
npm run typeorm migration:create .server/src/migrations/<migrationName>
```

## Run

Have pre installed npm, Docker, Docker Compose

```
bash up-dev.sh
```


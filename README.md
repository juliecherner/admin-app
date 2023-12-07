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

# init

```sh
cp .env.default .env
docker-compose up -d
```

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
npm run typeorm migration:create ./src/migrations/<migrationName>
```

## Run

Have preintalled Docker and Docker Compose

UP Postgres

```
bash up-dev.sh
```


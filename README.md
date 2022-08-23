# image_gallery
Simple image gallery web page to showcase images created with OpenAI's DALL-E2.

## Setup

Run `$ npm install` to install dependencies.

## Database Setup

These instructions assume Postgres v 14.4 or later is installed.

First create the img_gallery database from the command line by typing:
`$ createdb img_gallery`

Then connect to the newly created db:
`$ psql -d img_gallery`

You should get some output that looks like this:

```
psql (14.4)
Type "help" for help.

img_gallery=#
```

At the psql prompt create a user called 'img_gallery' by entering:
`CREATE USER img_gallery;`

If you get this message, then your user has been set up successfully:
`CREATE ROLE`

Now that your database is set up, run `$ knex migrate:latest`  to create the tables, and `$ knex seed:run` to populate the database.


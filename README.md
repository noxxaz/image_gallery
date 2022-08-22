# image_gallery
Simple image gallery web page to showcase images created with OpenAI's DALL-E2.

## Database Setup

Database schema is located here: [/resources/db_schema.png](/resources/db_schema.png)

These instructions assume Postgres v 14.4 or later is installed.

First create the wings database from the command line by typing:
`createdb wings`

Then connect to the newly created db:
`psql -d wings`

You should get some output that looks like this:

```
psql (14.4)
Type "help" for help.

wings=#
```

At the psql prompt create a user called 'wings' by entering:
`CREATE USER wings;`

If you get this message, then your user has been set up successfully:
`CREATE ROLE`

Now that your database is set up, run `npm run migrate-latest` to create the tables,
and `npm run seed-data` to populate seed data. The seed scripts can be run over and over to restore to the original seed data. If however, you need to re-run the migration, run the following command.


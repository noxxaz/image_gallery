const config = require("./knexfile");
const knex = require("knex")(config);

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
const IMAGES_TABLE = "images";

app.use(express.json());

// Serve static files in the public/ folder
app.use("/", express.static("public"));

/*** API ROUTES **************************************************************/
app.get("/api/view", async (req, res) => {
    let statusCode, responseString, limit = 10;
    responseString = await getAll();
    statusCode = 200;
    res.status(statusCode).send(responseString);
});

app.get("/api/view/:id", async (req, res) => {
  let statusCode, responseString;
  const id = req.params.id;
  statusCode = 200;
  responseString = await getById(id);
  res.status(statusCode).send(responseString);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/*** DB HELPER FUNCTIONS******************************************************/
const getAll = async function () {
  const images = await knex
    .select({
      imageId: "image_id",
      fileName: "filename",
      description: "description",
      dateCreated: "date_created",
    })
    .from(IMAGES_TABLE)
    .limit(10);
  return images;
};

const getById = async function (id) {
  const image = await knex
    .select({
      imageId: "image_id",
      fileName: "filename",
      description: "description",
      dateCreated: "date_created",
    })
    .from(IMAGES_TABLE)
    .where("image_id", id)
    .first();
  return image;
};


const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get("/",  (req, res) => {
  let queryText = `SELECT * FROM "item";`;

  pool
    .query(queryText)
    .then(result => {
      // Send all the results item to client from Database
      res.send(result.rows);
      console.log("Recieved all items from DB:", result.rows);
    })
    .catch(err => {
      console.log(`ERROR in GET form items: ${queryText} `, err);
      // Send an ERROR status
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", (req, res) => {
  // endpoint functionality
  console.log('in shelf.router.js POST route');
  console.log('req.body: ', req.body);
  console.log('user: ', req.user);
  //let queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3) `
  let queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3) `

  
  pool.query(queryText, [req.body.description, req.body.image_url, req.user.id])

  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('post item failed: ', err);
    res.sendStatus(500);
  });
  
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", (req, res) => {
  // endpoint functionality
});
// *********************************
// ********* STRECTHS  ********* //
// *********************************
/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;

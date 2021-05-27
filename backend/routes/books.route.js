const router = require("express").Router();
const { json } = require("body-parser");
const mongoose = require("mongoose");
const Book = require("../models/book.model");

router
  .route("/")
  .get((req, res) => {
    if (req.query.title !== undefined) {
      Book.find({ title: req.query.title }).then((book) => {
        res.json(book);
      });
    } else if (req.query.author !== undefined) {
      Book.find({ author: req.query.author }).then((book) => {
        res.json(book);
      });
    } else if (req.query.rating !== undefined) {
      if (req.query.mode === "gte") {
        Book.where("rating")
          .gte(req.query.rating)
          .then((book) => {
            res.json(book);
          });
      }
      if (req.query.mode === "lte") {
        Book.where("rating")
          .lte(req.query.rating)
          .then((book) => {
            res.json(book);
          });
      }
      if (req.query.mode === "gt") {
        Book.where("rating")
          .gt(req.query.rating)
          .then((book) => {
            res.json(book);
          });
      }
      if (req.query.mode === "lt") {
        Book.where("rating")
          .lt(req.query.rating)
          .then((book) => {
            res.json(book);
          });
      } else
        Book.find({ rating: req.query.rating }).then((book) => {
          res.json(book);
        });
    } else {
      Book.find().then((book) => {
        res.json(book);
      });
    }
  })
  .post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const rating = req.body.rating;
    const newBook = new Book({
      title,
      author,
      description,
      rating,
    });

    newBook
      .save()
      .then(() => res.json("Book Added"))
      .catch((err) => res.status(400).json({ err }));
  })
  .put((req, res) => {
    Book.findByIdAndUpdate(
      req.query.id,
      req.body,
      { new: true },

      (err, book) => {
        if (err) return res.status(500).send(err);
        return res.send(book);
      }
    );
  })
  .delete((req, res) => {
    Book.findByIdAndRemove(req.query.id, (err, book) => {
      if (err) return res.status(500).send(err);

      const response = {
        messasge: `Book with id:${req.query.id} succesfully deleted`,
        id: req.query.id,
      };

      return res.status(200).send(response);
    });
  });
module.exports = router;

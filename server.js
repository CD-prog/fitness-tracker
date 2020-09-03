const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const db = require('./models');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
});
app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'stats.html'));
});
app.get('/api/workouts', (req, res) => {
 db.Workout.find({})
 .then((data) => {
    res.status(200).json(data)
 })
 .catch(error => {
   res.status(500).json({error})
 })
});

app.post('/api/workouts', (req, res) => {
 db.Workout.create({})
 .then((data) => {
    res.status(200).json(data)
 })
 .catch(error => {
   res.status(500).json({error})
 })
});

app.put("/api/workouts/:id",(req,res) => {
  console.log(req.body)
  db.Workout.update({_id : req.params.id} , {$push:{exercises : req.body}})
  .then((data) => {
    res.status(200).json(data)
 })
 .catch(error => {
   res.status(500).json({error})
 })
});

app.get("/api/workouts/range",(req,res) => {
  db.Workout.find({})
  .then(Workout => res.json(Workout))
  .catch(error => {
    res.status(500).json({error})
  })
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

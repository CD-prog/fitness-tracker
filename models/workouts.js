const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  exercises: [{
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
  }],
  day: Date,
  totalDuration: Number
},
{ typeKey: '$type' }
);

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;

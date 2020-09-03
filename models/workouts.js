const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  exercises: {
      type:[{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
  }],
  default: []
},
  day: {
    type: Date,
    default: Date.now
  }
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;


/**  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  }, */
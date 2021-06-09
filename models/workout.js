const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
{
    day: { type: Date, default: () => new Date() },
    exercises: [{
    type: {
    type: String,
    },
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  const totalDuration = this.exercises.reduce((value, current) => {
    return value + current.duration;
  }, 0);

  return totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, trim: true, index: true, unique: true },
    name: { type: String, required: true, trim: true, index: true },
    length: { type: String, required: true, trim: true },     // e.g., "7 nights"
    start: { type: Date, required: true },
    resort: { type: String, required: true, trim: true },
    perPerson: { type: Number, required: true, min: 0 },
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  {
    collection: 'trips',     // ensure it uses the "trips" collection
    timestamps: true,        // createdAt / updatedAt
    versionKey: false
  }
);

// Nice JSON output (optional)
tripSchema.set('toJSON', {
  transform: (_doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

// Avoid OverwriteModelError in dev (hot reloads)
const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema);

module.exports = Trip;
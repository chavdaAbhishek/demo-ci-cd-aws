const mongoose = require('mongoose');

const RolesSchema = new Schema(
  {
    name            : { type: String, required: true } ,
    isDeleted       : { type: Boolean, default: false },
    deletedAt       : { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('role', RolesSchema, 'Roles');

const { Schema } = require('mongoose');

const locationSchema = new Schema(
    {
        locationId: {
            type: String,
            required: True
        }
    }
)

module.exports = locationSchema;
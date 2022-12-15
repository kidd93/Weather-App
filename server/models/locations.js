const { Schema } = require('mongoose');

const LocationsSchema = new Schema(
    {
        LocationsId: {
            type: String,
            required: true
        }
    }
)

module.exports = LocationsSchema;
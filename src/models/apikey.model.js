`use strict`;

import { model, Schema, Types } from "mongoose"; // Erase if already required

const DOCUMENT_NAME = `Apikey`;
const COLLECTION_NAME = `Apikeys`;

// Declare the Schema of the Mongo model
var apiKeySchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    permissions: {
      type: [String],
      required: true,
      enums: [`0000`, `1111`, `2222`],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
export default model(DOCUMENT_NAME, apiKeySchema);

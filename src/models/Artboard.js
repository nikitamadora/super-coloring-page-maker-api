import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ArtboardSchema = new Schema({
  canvasData: String
})
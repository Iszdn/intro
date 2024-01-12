import mongoose from 'mongoose';
const { Schema } = mongoose;

const IntroSchema = new Schema({
  title: String, 
  image: String,
  description: String,

});

const Intros = mongoose.model('intro', IntroSchema);
export default Intros
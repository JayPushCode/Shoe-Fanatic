require('dotenv').config();
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
)
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});



module.exports = mongoose.connection;

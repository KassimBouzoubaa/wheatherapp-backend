const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://kassimbouzoubaa:SKkBjkQcnIcLZDsb@cluster0.8nmkskx.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

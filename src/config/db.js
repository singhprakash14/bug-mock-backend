const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(

    'mongodb+srv://paradiseproduct:paradiseproduct@cluster0.bqqyl.mongodb.net/paradise_prouct_data?retryWrites=true&w=majority',

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    (err) => {
      if (err) {
        console.log("error in connection");
      } else {
        console.log("mongodb is connected");
      }
    }
  );
};

module.exports = connect;

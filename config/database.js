const mongoose = require("mongoose");

const connectDatabase = () => {

    mongoose
        .connect(process.env.DB_URI)
        .then(() => console.log("Database Connected Successfully!"));
        // .then((data) => {
        // console.log(`Mongodb connected with server: ${data.connection.host}`);
        // });
        // .catch((err) => {
        // console.log(err);
        // });

//   mongoose
//     .connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     }).catch((err) => {
//         console.log(err)
//     });
};

module.exports = connectDatabase;




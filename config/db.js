const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.4wqza.mongodb.net/PPA",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )

  .then(() => console.log("Conected to MongoDB"))
  .catch((err) => console.log("Failled to connect to MongoDB", err));

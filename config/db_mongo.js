const mongoose = require("mongoose");

//mongoose.set('strictQuery', false);
//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
// mongoose.connect("mongodb://localhost:27017/local", { useNewUrlParser: true, useUnifiedTopology: true}); mongodb+srv://<db_username>:<db_password>@clusteranderlyn.nz5ag.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAnderlyn
mongoose.connect("mongodb+srv://anderlyn:Anderlyn17@clusteranderlyn.nz5ag.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAnderlyn");

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;
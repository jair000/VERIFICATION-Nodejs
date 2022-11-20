const mongoose = require("mongoose");
const MONGO_URI = 'mongodb+srv://stillharley:jairo123@clustereldiablo.tzk8emu.mongodb.net/usuarios';

mongoose.connect(MONGO_URI)
.then(() => console.log("Conexión al MongodbAtlas correctamente."))
.catch((error) => console.log(error));
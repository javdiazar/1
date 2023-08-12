const app = require("./src/index");

const { database } = require("./db");

const PORT = 3001;
const HOST = "192.168.138.131";

database.sync({ force: false }).then(() =>
  app.listen(PORT, HOST, () => {
    console.log("servidor escuchando el el puerto 3001");
  })
);

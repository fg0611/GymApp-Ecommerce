const {
  createProductsSeeds,
} = require("./src/controllers/productControllers/createProductsSeeds");
const {
  createUsersSeeds,
} = require("./src/controllers/usersControllers/createUsersSeeds");
const {
  createOrderSeeds,
} = require("./src/controllers/orderControllers/createOrderSeeds");
const {
  locationsSeeder,
} = require("./src/controllers/locationControllers/locationSeeder");
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

require("dotenv").config();
/**
 * ****************************************************************
 * Agregar un process.env.PORT y agregarlo en el .env PORT = 3001 *
 * ************************************************************** */
conn.sync({ force: false }).then(() => {
  // server.listen(3000, async () => {
  server.listen(process.env.PORT, async () => {
    console.log(`listening at PORT ${process.env.PORT}`);

    //Estas funciones carga productos y usuarios del archivo seeds, en la DB
    await createProductsSeeds();
    await createUsersSeeds();
    await createOrderSeeds();
    await locationsSeeder();
  });
});

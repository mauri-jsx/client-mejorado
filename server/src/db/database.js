import mongo from "mongoose";
import { URL_DB } from "../config/config.js";
import color from "chalk";
const database = async () => {
  try {
    await mongo.connect(URL_DB);
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.magenta("                              database connected successfully"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    return mongo.connection;
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                  Error in database connection"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(color.yellow(error));
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};

export default database;

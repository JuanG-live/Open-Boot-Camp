import { suma,multiplica  } from "./Modulos/controller.js";
import chalk from "chalk"

console.log(multiplica(suma(1,2),multiplica(4,5)));
console.log(chalk.green(multiplica(suma(1,2),multiplica(4,5))));
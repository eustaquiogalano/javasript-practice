
import { University, obj, smp } from "./script.js";

const uni = new University("Kyuniversity");
console.log(uni);

uni.addDepartment("Math");
uni.addDepartment("Science");
uni.addDepartment("Confidential funds");
uni.removeDepartment("Confidential funds");

console.log(uni);





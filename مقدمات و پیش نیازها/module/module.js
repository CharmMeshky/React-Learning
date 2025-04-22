import { testString as string } from "./module1.js";

console.log(string)

import { testFunction } from "./module1.js";

const haseleZarb = testFunction(6,7)

console.log(haseleZarb)

import { Testclass } from "./module1.js";

const classMe = new Testclass('amirhossein', 'babaei asl').compiler()

console.log(classMe)

// import { testString, testFunction, Testclass } from "./module1.js";

import myDfualtvalue from "./module1.js"

console.log(myDfualtvalue)

import Defualt, {variable} from "./module1.js"

console.log(Defualt, variable)
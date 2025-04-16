export const testString = 'hello iam a string'

export const testFunction = (x,y) => {
    return x * y
}

export class Testclass {
    constructor(a,b){
        this.name = a
        this.family = b
    }

    compiler(){
        return `his name is ${this.name} and his family name is ${this.family}`
    }
}

export default "iam a default variable and my value is 10"

export const variable = 23
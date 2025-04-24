import { Conrext, testContext } from "./Testcontext"
import React from "react"

export class Rezome extends React.Component{

    static contextType = testContext

    render(){
        return(
            <>
             <p style={{color : this.context.color}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quo neque assumenda, libero numquam atque id, sed dolorem, quae illo est suscipit molestias perferendis a ipsum. Rerum voluptatem sunt eveniet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quo ex sed similique, blanditiis repellat, cum quaerat tempora numquam laudantium dolorum obcaecati ea cupiditate eius ratione quas qui nesciunt autem?</p>
             <div><Conrext/></div>
            </>
        )
    }

}
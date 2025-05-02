// import { createRef, PureComponent,  } from "react";
// import "./index.css";

// class Form extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//         name : ""
//     }
//     this.counter = 0
//     this.input = createRef()
//   }

//   handleName = ()=> {
//     this.setState({
//         name : this.input.current.value
//     })
//   }

//   componentDidMount(){
//     this.input.current.focus()
//   }

//   render() {
//     return (
//       <>
//         <input ref={this.input} type="text"></input>
//         <div className="buttons">
//           <button onClick={() => {this.input.current.value = ""}}>مخفی</button>
//           <button onClick={this.handleName}>ثبت</button>
//         </div>
//         <span>{this.counter++}</span>
//       </>
//     );
//   }
// }

// export default Form;

import { useEffect, useRef, useState } from "react";
import "./index.css";

let counter = 0

const Form = () => {

    const [name,setName] = useState()
    const input = useRef()

    const handleName = ()=> {
        setName(input.current.value)
    }

    useEffect(() => {
        input.current.focus()
    })

    return (
        <>
        {/* {console.log(input.current.value)} */}
          <input ref={input} type="text"></input>
          <div className="buttons">
            <button onClick={() => {input.current.value = ""}}>مخفی</button>
            <button onClick={handleName}>ثبت</button>
          </div>
          <span>{counter++}</span>
        </>
      );

}

export default Form

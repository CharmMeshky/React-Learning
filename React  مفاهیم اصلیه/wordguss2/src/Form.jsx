/* eslint-disable no-unused-vars */
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

import { forwardRef, useState } from "react";
import "./index.css";

let counter = 0;

const Form = (prop, ref) => {
  const [name, setName] = useState("");

  const handleName = () => {
    setName(ref.current.value);
  };

  return (
    <>
      {/* {console.log(input.current.value)} */}
      <input ref={ref} type="text"></input>
      <div className="buttons">
        <button
          onClick={() => {
            ref.current.value = "";
          }}
        >
          مخفی
        </button>
        <button onClick={handleName}>ثبت</button>
      </div>
      <span>{counter++}</span>
    </>
  );
};

export default forwardRef(Form);



import React from "react";

export default function About(props) {
  // const [myStyle,NewMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  let myStyle={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"black":"white"

  }
  // const [btnTxt,setBtnTxt] = useState("Enable LightMode")
  // const toogleStyle=()=>{
  //   if(myStyle.color === 'white'){
  //     NewMyStyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //       setBtnTxt("Enable DarkMode");
  //   }
  //     else{
  //     NewMyStyle({
  //     color: "white",
  //     backgroundColor: "black"
  //   })
  //   setBtnTxt("Enable LightMode");
  // }
  // }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text!</strong>
              
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>Welcome to Analyze Your Text!</strong>
            Unlock the full potential of your writing with our powerful text analysis tools. Whether you’re a student, a professional writer, or just looking to improve your communication, our platform helps you break down and refine your content. From grammar and structure to tone and readability, "Analyze Your Text!" provides in-depth insights, ensuring your message is clear, effective, and impactful. Start analyzing today and elevate your writing to the next level!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use!</strong>
              
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Take your writing to the next level with our completely free text analysis tools. Whether you're a student, blogger, or professional, our platform offers insights into your writing—helping you refine grammar, structure, readability, and tone at no cost. "Analyze Your Text!" is designed to make improving your content simple and accessible to everyone. Get started today for free and see how your writing can improve!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatable</strong>
              
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button type="button" onClick={toogleStyle} className="btn btn-primary my-3">
          {btnTxt}
        </button>
      </div> */}
    </div>
  );
}

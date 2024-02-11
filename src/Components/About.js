import React, { useState } from "react";

export default function About(props) {
  const [mystyle, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [mystylesubHeader, setSubHeaderMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const enablingDarkMode = () => {
    if (mystyle.color === "black") {
      setMode({
        color: "white",
        backgroundColor: "black",
      });
      setSubHeaderMode({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  const disablingDarkMode = () => {
    if (mystyle.color === "white") {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setSubHeaderMode({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  //   let mystyle = {
  //     color: "red",
  //     backgroundColor: "blue",
  //   };

  //   let mystylesubHeader = {
  //     color: "yellow",
  //     backgroundColor: "blue",
  //   };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
          backgroundColor: props.mode === "dark" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                }}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                }}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "light" ? "black" : "white",
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                }}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  my-3">
        <button className="btn btn-primary" onClick={enablingDarkMode}>
          enableDarkMode
        </button>
        <button className="btn btn-primary mx-5" onClick={disablingDarkMode}>
          DisableDarkMode
        </button>
      </div>
    </>
  );
}

import Form from "./Form";
import SleepingPanda from "./SleepingPanda";
import React from "react";
function Connect() {
  return (
    <>
      <section style={{background:"#fffaeb"}} className="section blog ">
        <div className="section-title">
          <h2>Connect</h2>
          <div className="underline"></div>
        </div>
        <div className="pandaForm">
          <SleepingPanda  />
          <Form />
        </div>
      </section>
    </>
  );
}

export default Connect;

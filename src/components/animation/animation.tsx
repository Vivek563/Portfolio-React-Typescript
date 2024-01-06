import React, { useEffect } from "react";

function Animation() {
  useEffect(() => {
    const words = "Creative Coder";
    const ANIMATION_DURATION = 4000;

    words.split("").forEach((char, i) => {
      function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;
        return div;
      }
      
      const spiralElement = document.getElementById("spiral");
      const spiral2Element = document.getElementById("spiral2");
        // const spiral3Element = document.getElementById("spiral3");

      if (spiralElement && spiral2Element ) {
        spiralElement.append(createElement(0));
        spiral2Element.append(createElement(-1 * ANIMATION_DURATION / 2));
        // spiral3Element.append(createElement(ANIMATION_DURATION/4));
      }
    });
  }, []);

  return (
    <>
      <div className="animation">
        <div id="spiral" className="spiral"></div>
        <div id="spiral2" className="spiral"></div>
        {/* <div id="spiral3" className="spiral"></div>/ */}
      </div>
    </>
  );
}

export default Animation;

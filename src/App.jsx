import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.defaults({
      scroller: ".main",
    });

    const matches = document.querySelectorAll("p");

    matches.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: "0%",
        fontWeight: 800,
        stagger: 1,
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "top center",
          end: "bottom 40%",
        },
      });
    });
    return () => {};
  }, []);
  return (
    <>
      {/* app-container */}
      <div className="bg-[#0f0f0f] text-[80px] relative">
        {/* main-container */}
        <div className="main w-[100%] h-[100vh] flex flex-col overflow-auto">
          <div className="w-[100%] h-[70vh] text-white flex items-center justify-center">
            Scroll to See Effect
          </div>
          <Text>
            <p>I'm a Junior Full Stack Developer</p>
            <p>and a recent graduate of the</p>
            <p>Software Program.</p>

            <p>I create project under the notion</p>
            <p>that "less is more" and my work</p>
            <p>reflects my addiction for minimal</p>
            <p>and clean design as well as my</p>
            <p>desire to push boundaries.</p>
          </Text>
          <div className="w-[100%] h-[70vh] text-white flex items-center justify-center">
            Scroll to up
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const Text = styled.div`
  font-size: 50px;
  font-weight: 200;
  padding: 70px 0;

  p {
    background: linear-gradient(to right, #ffffff 50%, #252525 50%);
    background-size: 200% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    user-select: none;
  }
`;

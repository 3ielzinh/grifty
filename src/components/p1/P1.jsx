import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./P1.css";

import element from "../../assets/images/others/element.webp";
import logo from "../../assets/images/others/logo.webp";

const P1 = () => {
  const comp = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".e1, .e2, .e3, .e4", {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.out",
    })
    .from(".logo", {
      y: -30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=1")
    .from(".text h1, .text h2", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.8");

    gsap.to(".e1, .e3", {
      y: 15,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".e2, .e4", {
      y: -15,
      x: -10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });
  }, { scope: comp });

  return (
    <div className="p1" ref={comp}>
      <div className="border">
        <img src={element} alt="" className="e1" loading="eager" />
        <img src={element} alt="" className="e2" loading="eager" />
        <img src={element} alt="" className="e3" loading="eager" />
        <img src={element} alt="" className="e4" loading="eager" />
      </div>
      <div className="here">
        <img src={logo} alt="Logo" className="logo" loading="eager" />
        <div className="text">
          <h1>DESCUBRA UMA FORMAÇÃO PARA CABELEIREIROS QUE DESEJAM IR ALÉM DA REPETIÇÃO.</h1>
          <h2>FORMAÇÃO ONLINE</h2>
        </div>
      </div>
    </div>
  );
};

export default P1;
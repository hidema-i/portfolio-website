import React from "react";
import "../styles/About.css";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutLeft"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="aboutRight">
        <h1> ABOUT US</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          reprehenderit tempora itaque, ullam exercitationem dolor culpa nobis
          nesciunt provident quia. Quidem, et culpa? Temporibus tempore officiis
          cum voluptates veritatis enim eligendi. Reprehenderit neque in eos
          sapiente, totam perferendis iure facilis sed omnis quisquam assumenda
          fuga corrupti porro optio nesciunt fugiat necessitatibus iste
          voluptatibus eaque deserunt doloremque nisi fugit modi. Veritatis
          dolorem, dolore minima alias reiciendis dignissimos possimus voluptate
          quae repudiandae error doloribus earum repellendus eos rem soluta odit
          animi, non culpa qui est? Ab rem doloribus quis quod a, nisi ipsum
          repellendus magnam harum itaque sapiente ratione, eligendi numquam
          labore?
        </p>
      </div>
    </div>
  );
};

export default About;

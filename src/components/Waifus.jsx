import React, { useState } from "react";
import { Waifu } from "./Waifu";
import abby from "../assets/abby.png";
import shinobu from "../assets/shinobu.png";
import tea from "../assets/tea.png";
import sylvie from "../assets/sylvie.png";
import hinako from "../assets/hinako.png";
import meluko from "../assets/meluko.png";

export const Waifus = () => {
  return (
    <section className="max-w-7xl mx-auto scroll-m-40" id="waifu">
      <ul className="flex flex-col justify-center items-center sm:flex-row gap-5">
        <Waifu target={abby} />
        <Waifu target={shinobu} />
        <Waifu target={tea} />
        <Waifu target={sylvie} />
        <Waifu target={hinako} />
        <Waifu target={meluko} />
      </ul>
    </section>
  );
};

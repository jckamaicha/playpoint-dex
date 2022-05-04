import React from "react";
import "./styles/style.css";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="Playpoint.ai" />

      <div className="utilities">
        <Button className="network">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/avalanche-avax.png"
            alt=""
          />
          <span>Avalanche</span>
          <span>
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </Button>
        <Button className="wallet">Connect Wallet</Button>
        <Button className="downIcon">
          <i className="ri-menu-3-line"></i>
        </Button>
      </div>
    </div>
  );
}
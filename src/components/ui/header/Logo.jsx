import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../../../image/icons/logo.svg";

const LogoContainer = styled.div`
  width: 63px;
  height: 70px;
  background: url(${logoImg});
  cursor: wait;
  transition: transform 0.3s ease;

  &.rotate {
    transform: rotate(360deg);
  }
`;

const Logo = () => {
  const [isRotated, setRotated] = useState(false);

  const handleLogoClick = () => {
    setRotated(!isRotated);
  };

  return (
    <LogoContainer
      className={isRotated ? "rotate" : ""}
      onClick={handleLogoClick}
    />
  );
};

export default Logo;

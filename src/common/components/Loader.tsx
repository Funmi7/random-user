import React from "react";
import styled from "styled-components";

const Loader = () => (
  <LoaderWrapper>
    <LoaderStyled>
      <span className="spinner"></span>
    </LoaderStyled>
  </LoaderWrapper>
);

const LoaderWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const LoaderStyled = styled.div`
  position: absolute;
  display: grid;
  /* top: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%); */
  padding: 7px;
  background: #fff;
  border-radius: 100px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);

  .spinner {
    width: 22px;
    height: 22px;
    display: block;
    color: #23bc6a;
  }

  .spinner:after {
    content: "";
    width: 18px;
    height: 18px;
    display: inline-block;
    border: 2px solid #23bc6a;
    border-bottom-color: transparent;
    border-radius: 100%;
    background: transparent;
    animation: rotate 0.75s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 250;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -140;
    }
  }
`;
export default Loader;

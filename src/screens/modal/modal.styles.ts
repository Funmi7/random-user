import styled from "styled-components";

type BackdropProps = {
  showBackdrop: boolean;
};

export const ModalBackdropWrapper = styled.div<BackdropProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100vw;
  margin-left: -50vw !important;
  left: 50% !important;
  z-index: 1000;
  -webkit-transition: opacity 0.6s cubic-bezier(0.455, 0.03, 0, 1) !important;
  transition: opacity 0.6s cubic-bezier(0.455, 0.03, 0, 1) !important;
  visibility: ${({ showBackdrop }) => (showBackdrop ? "visible" : "hidden")};
  padding: 25px 20px;
  -moz-transition: opacity 0.6s cubic-bezier(0.455, 0.03, 0, 1) !important;
  -ms-transition: opacity 0.6s cubic-bezier(0.455, 0.03, 0, 1) !important;
  -o-transition: opacity 0.6s cubic-bezier(0.455, 0.03, 0, 1) !important;
`;

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  min-height: 685px;
  max-width: 560px;
  width: 100%;
  border-radius: 6px;
  padding: 24.5px 33px 39px 37px;
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.div`
  align-self: flex-start;
  font-size: 0.75rem;
  cursor: pointer;
`;

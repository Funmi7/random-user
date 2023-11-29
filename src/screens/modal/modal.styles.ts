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
  min-height: 450px;
  max-width: 450px;
  width: 100%;
  border-radius: 6px;
  padding: 20px 20px 30px;
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-top: 10px;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;

    .profile-name {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding-bottom: 5px;
      margin-top: 20px;

      h4 {
        font-size: 1rem;
        font-weight: 700;
      }
      figure {
        margin: 0px;

        img {
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }
      }
    }
  }
`;
export const UserDetailsWrapper = styled.div`
  margin-top: 25px;
  .profile-details-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 0px;
    h5 {
      color: #000;
      font-size: 0.9375rem;
      font-weight: 700;
      line-height: 20px;
    }
    p {
      color: #979797;
      font-size: 0.8125rem;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const BackButton = styled.div`
  align-self: flex-start;
  cursor: pointer;
  display: flex;
  p {
    font-size: 0.75rem;
    color: #23bc6a;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);
`;

export const Divider = styled.div`
  border-top: 1px solid rgba(219, 220, 224, 0.5);
`;

export const Button = styled.button`
  background: #23bc6a;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: 106px;
  height: 40px;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
`;

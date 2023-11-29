import React, { useCallback, useEffect, useRef, useState, FC } from "react";

import ReactPortal from "common/Portal";
import {
  ModalBackdropWrapper,
  ModalContainer,
  ModalWrapper,
  BackButton,
  Divider,
  IconContainer,
  UserDetailsWrapper,
} from "./modal.styles";
import { TableType } from "common/types";
import { ReactComponent as BackArrow } from "common/icons/back-arrow.svg";
import { ReactComponent as EmailIcon } from "common/icons/email.svg";
import { ReactComponent as PhoneIcon } from "common/icons/phone-number.svg";
import { ReactComponent as GenderIcon } from "common/icons/gender.svg";
import { ReactComponent as LocationIcon } from "common/icons/location.svg";

type Listener = (this: Document, ev: MouseEvent) => any;

type DetailsModalProps = {
  closeModal: () => void;
  userDetails: TableType | null;
};

const DetailsModal: FC<DetailsModalProps> = ({ closeModal, userDetails }) => {
  const [showbackdrop, setshowbackdrop] = useState(false);

  const wrapperRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.classList.add("backdrop-init");
    setshowbackdrop(true);
    return () => {
      document.body.classList.remove("backdrop-init");
      setshowbackdrop(false);
    };
  }, []);

  const handleClickOutside: Listener = useCallback(
    (event) => {
      if (wrapperRef.current !== null) {
        if (wrapperRef && !wrapperRef.current.contains(event.target as Node)) {
          closeModal();
        }
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ModalWrapper ref={wrapperRef}>
        <ModalBackdropWrapper showBackdrop={showbackdrop}>
          <ModalContainer>
            <BackButton onClick={closeModal}>
              <div>
                <BackArrow />
              </div>
              <p>Back</p>
            </BackButton>
            <h3>User Details</h3>
            <section>
              <div className="profile-name">
                <figure>
                  <img src={userDetails?.biggerPicture} alt="user profile" />
                </figure>
                <h4>{userDetails?.name}</h4>
              </div>
              {/* <Divider /> */}
              <UserDetailsWrapper>
                <div className="profile-details-item">
                  <IconContainer>
                    <EmailIcon />
                  </IconContainer>
                  <div>
                    <p>Email Address</p>
                    <h5>{userDetails?.email}</h5>
                  </div>
                </div>
                <Divider />
                <div className="profile-details-item">
                  <IconContainer>
                    <PhoneIcon />
                  </IconContainer>
                  <div>
                    <p>Phone Number</p>
                    <h5>{userDetails?.phone}</h5>
                  </div>
                </div>
                <Divider />
                <div className="profile-details-item">
                  <IconContainer>
                    <GenderIcon />
                  </IconContainer>
                  <div>
                    <p>Gender</p>
                    <h5>{userDetails?.gender}</h5>
                  </div>
                </div>
                <Divider />
                <div className="profile-details-item">
                  <IconContainer>
                    <LocationIcon />
                  </IconContainer>
                  <div>
                    <p>Country</p>
                    <h5>{userDetails?.country}</h5>
                  </div>
                </div>
              </UserDetailsWrapper>
            </section>
          </ModalContainer>
        </ModalBackdropWrapper>
      </ModalWrapper>
    </ReactPortal>
  );
};
export default DetailsModal;

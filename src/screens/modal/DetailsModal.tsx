import React, { useCallback, useEffect, useRef, useState, FC } from "react";

import ReactPortal from "common/Portal";
import {
  ModalBackdropWrapper,
  ModalContainer,
  ModalWrapper,
  BackButton,
} from "./modal.styles";
import { TableType } from "common/types";

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
            <BackButton onClick={closeModal}>Back</BackButton>
            <p>{userDetails?.name}</p>
            <p>{userDetails?.email}</p>
            <p>{userDetails?.phone}</p>
            <img src={userDetails?.picture} alt="user profile" />
          </ModalContainer>
        </ModalBackdropWrapper>
      </ModalWrapper>
    </ReactPortal>
  );
};
export default DetailsModal;

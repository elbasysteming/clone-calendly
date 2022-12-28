import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "../../components/Icons";
import {
    ModalDiv,
    ModalSandbox,
    ModalBox,
    ModalHeader,
    ModalBody,
    ModalClose,
} from "./styles";
import { BookingConfirm } from "../BookingConfirm";
import { closeModal } from "../../features/modal/modalSlice";

export const Modal = () => {
    const modal = useSelector(state => state.modal.modal);
    const dispatch = useDispatch();

    return modal.id
        ? ReactDOM.createPortal(
              <ModalDiv>
                  <ModalSandbox />
                  <ModalBox>
                      <ModalHeader>
                          {modal.title} - <span>{modal.data.date}</span>
                          <ModalClose onClick={() => dispatch(closeModal())}>
                              <MdOutlineClose size="20px" />
                          </ModalClose>
                      </ModalHeader>
                      <ModalBody>
                          {modal.id === "confirm-booking" && (
                              <BookingConfirm bookingData={modal.data} />
                          )}
                      </ModalBody>
                  </ModalBox>
              </ModalDiv>,
              document.getElementById("modal")
          )
        : null;
};

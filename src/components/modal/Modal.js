import React from "react";
import "./Modal.css";
import Icon from "../icon/Icon";

const Modal = ({ handleHideModal, children }) => {
  console.log("<Modal/> rendered");
  return (
    <div className="modal-container" onClick={handleHideModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-close">
          <Icon name="clear" action={handleHideModal} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;

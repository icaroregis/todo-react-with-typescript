import { Modal as MaterialModal, SxProps } from "@mui/material";
import { IModalProps } from "./Modal.types";
import {
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalHeaderContainer,
  ModalHeaderTitle,
} from "./Modal.style";
import { X } from "phosphor-react";

export const Modal = ({
  id,
  className,
  children,
  state: [open, setOpen],
  title = "",
  top,
  left,
  minWidth,
  width,
  maxWidth,
  minHeight,
  height,
  maxHeight,
  zIndex,
  slots,
  closeOnBackdropClick = true,
  hideBackdrop = false,
  customStyles,
  onClose = () => {},
  showCloseButton,
}: IModalProps) => {
  const handleClose = (
    _?: object,
    reason?: "escapeKeyDown" | "backdropClick"
  ): void => {
    if (!closeOnBackdropClick && reason === "backdropClick") {
      return;
    }
    setOpen(false);
    onClose();
  };

  const style: SxProps = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  if (top) {
    style.top = top;
    style.bottom = "unset";
    style.display = "block";
  }
  if (left) {
    style.left = left;
    style.right = "unset";
    style.display = "block";
  }

  return (
    <MaterialModal
      open={open}
      onClose={handleClose}
      hideBackdrop={hideBackdrop}
      draggable={false}
      sx={style}
    >
      <ModalContainer
        id={id}
        className={className}
        minWidth={minWidth}
        width={width}
        maxWidth={maxWidth}
        minHeight={minHeight}
        height={height}
        maxHeight={maxHeight}
        zIndex={zIndex}
        customStyle={customStyles?.containerStyle}
      >
        <ModalHeader
          className={className ? `${className}Header` : undefined}
          customStyle={customStyles?.headerStyle}
        >
          {slots?.Header ?? (
            <ModalHeaderContainer
              customStyle={customStyles?.headerContainerStyle}
            >
              <ModalHeaderTitle customStyle={customStyles?.headerTitleStyle}>
                {title}
              </ModalHeaderTitle>

              {showCloseButton !== false && (
                <ModalCloseButton onClick={() => handleClose()}>
                  <X size={40} />
                </ModalCloseButton>
              )}
            </ModalHeaderContainer>
          )}
        </ModalHeader>
        <ModalBody
          className={className ? `${className}Body` : undefined}
          customStyle={customStyles?.bodyStyle}
        >
          {children}
        </ModalBody>
        {slots?.Footer ? (
          <ModalFooter
            className={className ? `${className}Footer` : undefined}
            customStyle={customStyles?.footerStyle}
          >
            {slots?.Footer}
          </ModalFooter>
        ) : (
          ""
        )}
      </ModalContainer>
    </MaterialModal>
  );
};

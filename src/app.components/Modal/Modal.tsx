import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Portal from '../Portal/Portal';
import { fadeIn, fadeOut } from 'app.styled/keyframe';
import Button from 'app.components/Button/Button';
import {
  faCaretUp,
  faFax,
  faRemoveFormat,
  faTimes,
  faWindowClose,
  faXRay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TProps = {
  id?: string;
  open: boolean;
  onConfirm?: Function;
  onClose: Function;
  closable?: boolean;
  overlayStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  modalStyle?: React.CSSProperties;
  shouldCloseOnOverlayClick?: boolean;
  mask?: boolean;
  confirmText?: string | any;
  cancelText?: string | any;
  isFooter?: boolean;
  type?: string;
  confirmButtonProps?: any;
  cancelButtonProps?: any;
};

const Modal: React.FC<TProps> = ({
  id,
  open,
  onConfirm = null,
  onClose,
  closable = false,
  overlayStyle,
  contentStyle,
  modalStyle,
  shouldCloseOnOverlayClick = true,
  mask = true,
  confirmText = '확인',
  cancelText = '취소',
  isFooter = false,
  type = 'confirm',
  confirmButtonProps,
  cancelButtonProps,
  children,
  ...props
}) => {
  if (!open) return null;

  const ref = useRef(null);
  const [close, setClose] = useState(false);

  const handleClose = () => {
    onClose && setClose(true);
  };
  const handleClickOverlay = () => {
    shouldCloseOnOverlayClick && handleClose();
  };
  const handleConfirm = async () => {
    (await onConfirm) && onConfirm?.(handleClose);
  };
  const handleAnimationEnd = () => {
    close && onClose?.();
  };

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Portal id={id}>
      <StyledModal {...props} close={close} onAnimationEnd={handleAnimationEnd}>
        {mask && (
          <ModalOverlay
            className="modal-overlay"
            style={overlayStyle}
            onClick={handleClickOverlay}
          />
        )}

        <ModalWrapper ref={ref} className="modal-wrapper" tabIndex="-1">
          <ModalBody tabIndex="0" style={modalStyle} className="modal-body">
            {closable && (
              <div className="modal-close" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            )}

            <div className="modal-content">
              {children}
              {isFooter && (
                <div className="modal-content-footer">
                  {type !== 'alert' && (
                    <Button
                      color="secondary"
                      onClick={handleClose}
                      className="modal-cancel"
                      {...cancelButtonProps}
                    >
                      {cancelText}
                    </Button>
                  )}

                  {onConfirm && (
                    <Button
                      color="primary"
                      onClick={handleConfirm}
                      className="modal-confirm"
                      {...confirmButtonProps}
                    >
                      {confirmText}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </ModalBody>
        </ModalWrapper>
      </StyledModal>
    </Portal>
  );
};

export default Modal;

const StyledModal = styled.div`
  ${({ close }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    animation: ${close ? fadeOut : fadeIn} 0.15s;
  `}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: relative;
  height: 100%;
  outline: 0;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
`;

const ModalBody = styled.div`
  ${({ theme: { darkMode, color } }) => css`
    z-index: 1000;
    position: relative;
    outline: none;
    overflow-y: auto;
    border-radius: 15px;
    background-color: #fff;

    .modal-content {
      width: 100%;

      .modal-cancel {
        margin-right: 10px;
      }
    }
    .modal-confirm {
      z-index: 1 !important;
    }

    .modal-content-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .modal-close {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 2;

      color: #3563d8;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  `}
`;

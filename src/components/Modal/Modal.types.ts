import { Dispatch, ReactNode, SetStateAction } from 'react';
import { CSSProp } from 'styled-components';

export interface IModalCustomStyles {
  containerStyle?: CSSProp;
  headerStyle?: CSSProp;
  headerContainerStyle?: CSSProp;
  headerTitleStyle?: CSSProp;
  bodyStyle?: CSSProp;
  footerStyle?: CSSProp;
}
export interface IModalProps {
  id?: string;

  className?: string;

  state: [boolean, Dispatch<SetStateAction<boolean>>];

  children: ReactNode;

  title?: string;

  top?: string;

  left?: string;

  minWidth?: string;

  width?: string;

  maxWidth?: string;

  minHeight?: string;

  height?: string;

  maxHeight?: string;

  zIndex?: number;

  hideBackdrop?: boolean;

  closeOnBackdropClick?: boolean;

  slots?: {
    Header?: ReactNode;

    Footer?: ReactNode;
  };
  customStyles?: IModalCustomStyles;

  onClose?: () => void;

  showCloseButton?: boolean;
}

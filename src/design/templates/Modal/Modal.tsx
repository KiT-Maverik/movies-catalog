import { ReactNode, useMemo } from "react";
import {
  Box,
  BoxProps,
  Modal as MUIModal,
  Stack,
  IconButton,
  Typography,
  TypographyProps,
  ModalProps as MuiModalProps,
  StackProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import style from "./Modal.styles";
import {ModalWidth, modalWidthParams} from "./Modal.constants";

export type ModalLayout = "window" | "fullscreen";

/** Props for the Modal component. */
interface ModalProps extends Omit<MuiModalProps, "children" | "width"> {
  /** The content to be rendered inside the modal. */
  children: ReactNode;
  /** Callback fired when the component requests to be closed. */
  onClose(): void;
  /** Whether to show modal full width */
  layout?: ModalLayout;
  ContentProps?: StackProps;
  width?: ModalWidth;
  open: boolean;
}

/**
 * A customizable modal component.
 */
export const Modal = ({
  children,
  layout = "window",
  onClose,
  width = "md",
                        open,
  ContentProps,
}: ModalProps) => {
  return (
    <MUIModal open={open} sx={style.overlay[layout]} onClose={onClose}>
      <Stack
        maxWidth={modalWidthParams[width]}
        sx={style.modal.layout[layout]}
        {...ContentProps}
      >
        {children}
      </Stack>
    </MUIModal>
  );
};

interface ModalHeaderProps extends BoxProps {
  /**
   * The title to be displayed in the modal header.
   * Be advised: it overrides Headers' children.
   * */
  title?: string;
  nodeTitle?: boolean;
  /** Determines whether the close button should be displayed. */
  onClose?: () => void;

  titleProps?: TypographyProps;
}

/**
 * Represents the header section of the Modal.
 */
const Header = (props: ModalHeaderProps) => {
  const { title, nodeTitle, children, onClose, titleProps, ...rest } = props;

  const content = useMemo(() => {
    if (title)
      return (
        <Typography
          variant="h5"
          flexGrow={1}
          {...titleProps}
        >
          {title}
        </Typography>
      );
    if (children) return children;
    return null;
  }, [children, title]);

  const closeButton = useMemo(() => {
    if (!onClose) return null;

    return (
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    );
  }, [onClose]);

  return (
    <Box
      sx={style.modal.header(!!title, !!nodeTitle)}
      {...rest}
    >
      {content}
      {closeButton}
    </Box>
  );
};

/**
 * Represents the body section of the Modal.
 */
const Body = (props: BoxProps) => {
  return (
    <Box sx={style.modal.body} {...props}>
      {props.children}
    </Box>
  );
};

/**
 * Represents the actions section of the Modal.
 */
const Actions = (props: BoxProps) => {
  if (!props.children) return null;

  return (
    <Box
      sx={style.modal.actions}
      {...props}
    >
      {props.children}
    </Box>
  );
};

// Assigning components to Modal for easy access
Modal.Header = Header;
Modal.Body = Body;
Modal.Actions = Actions;

export default Modal;

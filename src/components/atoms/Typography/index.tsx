import {
  Typography,
  TypographyProps as MuiTypographyProps,
  SxProps,
} from "@mui/material";
export interface TypographyProps extends MuiTypographyProps {
  sx?: SxProps;
  children?: any;
}
export const TypographyComponent = ({ sx, children }: TypographyProps) => {
  return <Typography sx={sx}>{children}</Typography>;
};

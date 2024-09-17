import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  downloadLink?: string;  // Tornar a propriedade opcional
}

const StyledButtonComponent: React.FC<StyledButtonProps> = ({ children, downloadLink }) => {

  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return downloadLink ? (
    <a href={downloadLink} download="curriculo.pdf">
      <StyledButton>
        {children}
      </StyledButton>
    </a>
  ) : (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default StyledButtonComponent;

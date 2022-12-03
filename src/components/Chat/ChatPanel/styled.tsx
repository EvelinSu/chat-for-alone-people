import styled from "styled-components";

export const SChatTextarea = styled.textarea((props) => ({
    padding: "10px 15px",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "inherit",
    border: "1px solid transparent",
    outline: "none",
    resize: "none",
    fontSize: "inherit",
    height: 84,
    font: "inherit",
    width: "100%",
    transition: "0.2s",
    "&:focus": {
        border: `1px solid rgba(255, 255, 255, 0.3) `,
    }
}))

export const SChatPanel = styled.div((props) => ({
    display: "flex",
    padding: "15px 0 15px 15px",
    alignItems: "center",
    marginTop: "auto"
}))

export const SChatButton = styled.button((props) => ({
    height: "100%",
    borderRadius: 20,
    border: "none",
    outline: "none",
    padding: "0 15px",
    fontSize: 16,
    backgroundColor: "transparent",
    color: "#fff",
    cursor: "pointer",
    transition: "0.2s",
    svg: {
      width: 40,
      height: 40,
    },
    "&:hover": {
        transform: "scale(0.8)"
    },
    "&:disabled": {
        opacity: 0.3,
        pointerEvents: "none",
    }
}))
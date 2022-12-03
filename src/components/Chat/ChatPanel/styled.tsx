import styled from "styled-components";
import {theme} from "../../../styles/baseTheme";

export const SChatTextarea = styled.textarea((props) => ({
    padding: "10px 15px",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "inherit",
    border: "none",
    outline: "none",
    resize: "none",
    fontSize: "inherit",
    height: 42,
    font: "inherit",
    width: "100%",
    transition: "0.2s",
    "&:focus": {
        height: "84px",
    }
}))

export const SChatPanel = styled.div((props) => ({
    display: "flex",
    gap: 20,
    padding: 15,
    alignItems: "center",
    marginTop: "auto"
}))

export const SChatButton = styled.button((props) => ({
    height: "100%",
    borderRadius: 20,
    border: "none",
    outline: "none",
    padding: "0 20px",
    backgroundColor: theme.colors.button.success,
    color: "#fff",
    transition: "0.2s",
    "&:hover": {
        transform: "scale(0.9)"
    },
    "&:active": {
        transform: "scale(0.9) translateY(3px)"
    },
    "&:disabled": {
        opacity: 0.3,
        pointerEvents: "none",
    }
}))
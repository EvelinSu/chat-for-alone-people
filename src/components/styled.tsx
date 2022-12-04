import styled from "styled-components";
import {theme} from "../styles/baseTheme";

export const SSiteWrapper = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.secondary,
    minHeight: "100vh",
    height: "100vh",
    maxHeight: "100vh",
    width: "100%",
    overflow: "auto",
    gap: "2vh",
    color: theme.colors.textOnSecondary,
    padding: 20,
}))

export const SSiteHeader = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,

}))

export const SMainText = styled.div((props) => ({
    textAlign: "center",
    opacity: 0.4,
    lineHeight: 1.2,
    fontSize: 16,
    a: {
        margin: "0 5px",
        color: "rgb(88,161,234)"
    }
}))
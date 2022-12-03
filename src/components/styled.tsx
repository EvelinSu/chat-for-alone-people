import styled from "styled-components";
import {theme} from "../styles/baseTheme";

export const SSiteWrapper = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    minHeight: "100vh",
    maxHeight: "100vh",
    width: "100%",
    gap: 50,
    color: theme.colors.textOnSecondary,
    padding: 20,
}))
export const SMainText = styled.div((props) => ({
    display: "flex",
    lineHeight: 2,
    textAlign: "center",
    opacity: 0.4,
    fontSize: 18,

}))
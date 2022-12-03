import styled from "styled-components";
import {theme} from "../../../styles/baseTheme";

export const SAddNewUserName = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
    height: "100%"
}))

export const SText = styled.div((props) => ({
    opacity: 0.5,
    fontSize: 18,
    textAlign: "center",
}))

export const Input = styled.input(props => ({
    borderRadius: 20,
    padding: "10px 15px",
    border: `1px solid ${theme.colors.input.default}`,
    outline: "none",
    backgroundColor: theme.colors.input.default,
    color: "inherit",
    "&:focus":{
        border: `1px solid ${theme.colors.input.border}`,
    }
}))

export const SButton = styled.button(props => ({
    padding: "10px 20px",
    borderRadius: 20,
    backgroundColor: theme.colors.button.success,
    border: "none",
    outline: "none",
    color: "#fff",
    "&:disabled": {
        opacity: 0.3
    }
}))

export const SAddNewUserNameForm = styled.div(props => ({
    display: "flex",
    alignItems: "center",
    gap: 20,
}))


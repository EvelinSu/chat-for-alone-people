import styled from "styled-components";
import {theme} from "../../styles/baseTheme";

export const SAddNewUserName = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
    padding: 20,
    maxWidth: "100%",
    height: "100%"
})

export const SText = styled.div({
    fontSize: 18,
    textAlign: "center",
})

export const Input = styled.input({
    borderRadius: 20,
    padding: "10px 15px",
    border: `1px solid ${theme.colors.input.default}`,
    outline: "none",
    backgroundColor: theme.colors.input.default,
    color: "inherit",
    width: "100%",
    "&:focus":{
        border: `1px solid ${theme.colors.input.border}`,
    }
})

export const SButton = styled.button({
    padding: "10px 20px",
    borderRadius: 20,
    backgroundColor: theme.colors.button.success,
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#fff",
    "&:disabled": {
        opacity: 0.3
    },
    "&:hover": {
        opacity: 0.7
    }
})

export const SAddNewUserNameForm = styled.div({
    display: "flex",
    alignItems: "center",
    gap: 20,
})


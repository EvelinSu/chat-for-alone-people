import styled, {css} from "styled-components";
import {theme} from "../../styles/baseTheme";

export const SChat = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.colors.darkAlpha,
    maxWidth: 750,
    width: "100%",
    height: "100%",
    overflow: "auto",
    borderRadius: 30,
}))

export const SChatMessages = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    gap: 10,
    padding: 20,
    height: "100%",
}))

export const SMessagesNotFound = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.3,
    flexGrow: 1,
    textAlign: "center",
}))

export const SMessage = styled.div<{ isMine?: boolean }>`
    display: flex;
    align-items: flex-end;
    word-break: break-word;
    white-space: pre-line;
    gap: 10px;
    column-gap: 10px;
    row-gap: 10px;
    max-width: 70%;
    color: #fff;
    ${props => props.isMine && css`
        flex-direction: row-reverse;
        margin-left: auto;
    `};
    @media all and (max-width: 640px) {
        max-width: 100%;
    }
`

export const SMessageAvatar = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    min-width: 50px;
    min-height: 50px;
    background-color: ${props => props.color};
    @media all and (max-width: 760px) {
        min-width: 35px;
        min-height: 35px;
        font-size: 16px;
    }
`

export const SMessageContainer = styled.div<{ isMine?: boolean }>(({isMine}) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: "8px 12px 10px 12px",
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    "&:after": {
        content: '""',
        position: "absolute",
        width: 30,
        height: 25,
        borderRight: `10px solid ${theme.colors.primary}`,
        borderBottomRightRadius: "35%",
        left: -35,
        bottom: 10,
        transition: "1s",
        transform: "scale(1.5) skewY(10deg) skewX(-10deg)",
        ...isMine && {
            borderRight: `10px solid ${theme.colors.secondary}`,
            left: "initial",
            right: -35,
            transform: "scale(-1.5, 1.5) skewY(10deg) skewX(-10deg)",
        }
    },
    ...isMine && {
        backgroundColor: theme.colors.secondary,
    },
}))

export const SMessageContent = styled.div(props => ({
    display: "flex",
    flexWrap: "wrap",
    zIndex: 1
}))

export const SMessageTitle = styled.span((props) => ({
    marginBottom: 5,
    fontWeight: 600,
    zIndex: 1,
    color: theme.colors.button.success,
    filter: "brightness(150%)",
    msFilter: "brightness(150%)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
}))

export const SMessageText = styled.span<{ opacity?: number }>(props => ({
    opacity: props.opacity,
}))

export const SMessageTime = styled.div(props => ({
    opacity: 0.4,
    marginLeft: "auto",
    paddingLeft: 10,
    margin: "auto 0 -5px auto",
    fontSize: "12px",
}))
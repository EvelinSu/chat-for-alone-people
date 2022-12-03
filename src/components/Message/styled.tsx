import styled from "styled-components";
import {theme} from "../../styles/baseTheme";

export const SChat = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.colors.darkAlpha,
    maxWidth: 750,
    width: "100%",
    height: 650,
    overflow: "auto",
    borderRadius: 30,
    boxSizing: "border-box",
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

export const SMessage = styled.div<{ isMine?: boolean }>(props => ({
    display: "flex",
    alignItems: "flex-end",
    wordBreak: "break-word",
    whiteSpace: "pre-line",
    gap: 10,
    columnGap: 10,
    rowGap: 10,
    fontSize: 14,
    color: "#fff",
    ...props.isMine && {
        flexDirection: "row-reverse",
    }
}))

export const SMessageAvatar = styled.div<{ color: string }>(props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    borderRadius: "50%",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    width: 50,
    height: 50,
    backgroundColor: props.color
}))

export const SMessageContainer = styled.div<{ isMine?: boolean }>(({isMine}) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: "8px 12px 10px 12px",
    backgroundColor: theme.colors.primary,
    borderRadius: "10px 10px 10px 10px",
    maxWidth: "60%",
    transition: "1s",
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
    }
}))

export const SMessageContent = styled.div(props => ({
    display: "flex",
    flexWrap: "wrap",
    zIndex: 1,
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
    margin: "auto 0 -2px auto",
    fontSize: "12px",
}))
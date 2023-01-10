import React, {FC} from 'react'
import {
    SMessage,
    SMessageAvatar,
    SMessageContainer,
    SMessageContent,
    SMessageText,
    SMessageTime,
    SMessageTitle
} from "./styled";

export type MessagePropsType = {
    name: string,
    time: string
    text: string
    avatarColor: string
    isMine: boolean
}
const Message: FC<MessagePropsType> = React.memo(({text, time, isMine, name, avatarColor}) => {

    return (
        <SMessage isMine={isMine}>
            <SMessageAvatar color={avatarColor}>
                {name[0]}
            </SMessageAvatar>
            <SMessageContainer isMine={isMine}>
                <SMessageTitle>{name}</SMessageTitle>
                <SMessageContent>
                    <SMessageText>{text}</SMessageText>
                    <SMessageTime>{time}</SMessageTime>
                </SMessageContent>
            </SMessageContainer>
        </SMessage>
    )
})

export default Message;

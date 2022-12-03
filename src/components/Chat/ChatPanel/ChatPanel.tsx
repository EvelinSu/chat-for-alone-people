import React, {ChangeEvent, FC, useState} from 'react';
import {SChatButton, SChatPanel, SChatTextarea} from "./styled";
import {UserType} from "../../../App";
import {v1} from "uuid";
import {getStringDate} from "../../../common/utils/getStringDate";
import {MessageType} from "../ChatContent";

type TChatPanelProps = {
    addNewMessage: (newMessage: MessageType) => void
    user: UserType
    scrollToBottom: () => void
    clearInterval: () => void
    startTimer: () => void
}
const ChatPanel: FC<TChatPanelProps> = (props) => {

    const [message, setMessage] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) return
        if (e.key === 'Enter') {
            e.preventDefault()
            addNewMessageHandler()
        }
    }

    const addNewMessageHandler = () => {
        const newMessage: MessageType = {
            id: v1(),
            name: props.user.name,
            userId: props.user.id,
            text: message,
            time: getStringDate(new Date()),
            avatarColor: props.user.avatarColor
        }
        if (message.trim() !== '') {
            props.addNewMessage(newMessage)
            setMessage('')
            props.scrollToBottom()
        }
        props.startTimer()
    }

    const onFocusHandler = () => {
        setTimeout(() => props.scrollToBottom(), 200)
        props.clearInterval()
    }

    return (
        <SChatPanel>
            <SChatTextarea
                onKeyDown={onKeyPressHandler}
                value={message}
                onFocus={onFocusHandler}
                onChange={onChangeHandler}
                placeholder={"Write your message..."}
            ></SChatTextarea>
            <SChatButton
                disabled={message.trim() === ''}
                onClick={addNewMessageHandler}
            >
                Send
            </SChatButton>
        </SChatPanel>
    );
};

export default ChatPanel;

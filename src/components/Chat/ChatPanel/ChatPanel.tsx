import React, {ChangeEvent, FC, useState} from 'react';
import {SChatButton, SChatPanel, SChatTextarea} from "./styled";
import {UserType} from "../../../App";
import {v1} from "uuid";
import {getStringDate} from "../../../common/utils/getStringDate";
import {MessageType} from "../ChatContent";
import {SendFillIcon} from "../../../assets/icons/SendFillIcon";

type TChatPanelProps = {
    onAddNewMessage: (newMessage: MessageType) => void
    user: UserType
}
const ChatPanel: FC<TChatPanelProps> = React.memo((props) => {

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
            props.onAddNewMessage(newMessage)
            setMessage('')
        }
    }

    return (
        <SChatPanel>
            <SChatTextarea
                onKeyDown={onKeyPressHandler}
                value={message}
                onChange={onChangeHandler}
                placeholder={"Write your message..."}
                autoFocus
            ></SChatTextarea>
            <SChatButton
                disabled={message.trim() === ''}
                onClick={addNewMessageHandler}
            >
                <SendFillIcon/>
            </SChatButton>
        </SChatPanel>
    );
});

export default ChatPanel;

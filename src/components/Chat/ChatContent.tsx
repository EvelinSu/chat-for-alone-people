import React, {FC, useEffect, useRef, useState} from 'react';
import {SChatMessages, SMessagesNotFound} from "../Message/styled";
import Message from "../Message/Message";
import {UserType} from "../../App";
import {getStateFromLS, saveStateToLS} from "../../common/utils/localStorage";
import ChatPanel from "./ChatPanel/ChatPanel";

export type MessageType = {
    id: string,
    name: string,
    time: string
    text: string
    userId: string
    avatarColor: string
}

type ChatContentType = {
    user: UserType
}
export const ChatContent: FC<ChatContentType> = (props) => {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [timerId, setTimerId] = useState(0)

    const scrollToBottomRef = useRef(null)

    const addNewMessageHandler = async (newMessage: MessageType) => {
        await saveStateToLS<MessageType[]>("messages", [...messages, newMessage])
        setMessages([...messages, newMessage])
    }

    const getMessagesFromLS = () => {
        const currentMessages = getStateFromLS<MessageType[]>("messages", messages)
        currentMessages && setMessages(currentMessages)
    }

    const checkActualMessages = () => {
        clearInterval(timerId);
        const id: number = window.setInterval(() => {
            getMessagesFromLS()
        }, 2000)
        setTimerId(id)
    }

    const scrollToBottomHandler = () => {
        const ref = scrollToBottomRef.current as unknown as HTMLDivElement
        setTimeout(() => {
            ref.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }, 0)
    }

    useEffect(() => {
        checkActualMessages()
        getMessagesFromLS()
    }, [])

    useEffect(() => {
        scrollToBottomHandler()
    }, [messages.length])

    return (
        <>
            <SChatMessages ref={scrollToBottomRef}>
                {messages.length
                    ? messages.map(({id, name, text, time, userId, avatarColor}) => (
                        <Message
                            key={id}
                            name={name}
                            text={text}
                            time={time}
                            avatarColor={avatarColor}
                            isMine={userId === props.user.id}
                        />
                    ))
                    : <SMessagesNotFound>Write the first message!</SMessagesNotFound>
                }
            </SChatMessages>
            <ChatPanel
                user={props.user}
                addNewMessage={addNewMessageHandler}
                scrollToBottom={scrollToBottomHandler}
                clearInterval={() => clearInterval(timerId)}
            />
        </>

    );
};


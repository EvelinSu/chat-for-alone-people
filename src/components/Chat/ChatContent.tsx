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
        await getMessagesFromLS()
            .then((res) => {
                saveStateToLS<MessageType[]>("messages", [...res, newMessage])
                setMessages([...res, newMessage])
            })
    }

    const getMessagesFromLS = async () => {
        const currentMessages = await getStateFromLS<MessageType[]>("messages")
        if (currentMessages) {
            setMessages(currentMessages)
        }
        return currentMessages || []
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
                top: ref.scrollHeight,
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
                startTimer={() => checkActualMessages()}
            />
        </>

    );
};


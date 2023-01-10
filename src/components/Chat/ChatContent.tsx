import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {SChatMessages, SMessagesNotFound} from "../Message/styled";
import Message from "../Message/Message";
import {UserType} from "../../App";
import {getStateFromLocalStorage, saveStateToLocalStorage} from "../../common/utils/localStorage";
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

    const scrollToBottomRef = useRef<HTMLDivElement>(null)

    const addNewMessageHandler = useCallback((newMessage: MessageType) => {
        const result = getMessagesFromLocalStorage();
        const messages = result.concat(newMessage);
        saveStateToLocalStorage<MessageType[]>("messages", messages)
        setMessages(messages)
    }, [])

    const getMessagesFromLocalStorage = () => {
        const currentMessages = getStateFromLocalStorage<MessageType[]>("messages")
        if (currentMessages && currentMessages.length !== messages.length) {
            setMessages(currentMessages)
        }
        return currentMessages || []
    }

    const scrollToBottomHandler = () => {
        const ref = scrollToBottomRef.current as HTMLDivElement
        ref.scrollTo({
            top: ref.scrollHeight,
            behavior: "smooth"
        })
    }

    const localStorageListener = (e: StorageEvent) => {
        if (e.storageArea === localStorage) {
            setTimeout(() => {
                getMessagesFromLocalStorage()
            }, 2000)
        }
    }

    useEffect(() => {
        getMessagesFromLocalStorage()
        window.addEventListener('storage', localStorageListener)
        return () => {
            window.removeEventListener('storage', localStorageListener)
        }
    }, [])

    useEffect(() => {
        scrollToBottomHandler()
    }, [localStorageListener])

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
                onAddNewMessage={addNewMessageHandler}
            />
        </>

    );
};


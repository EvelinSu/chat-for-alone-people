import React, {useEffect, useState} from 'react';
import {SChat} from "./components/Message/styled";
import {SMainText, SSiteHeader, SSiteWrapper} from "./components/styled";
import {ChatContent} from "./components/Chat/ChatContent";
import {AddNewUserName} from "./components/AddNewUserName/AddNewUserName";
import {getStateFromSessionStorage, saveStateToSessionStorage} from "./common/utils/sessionStorage";

export type UserType = {
    id: string
    name: string
    avatarColor: string
}

function App() {

    const [currentUser, setCurrentUser] = useState<UserType>()

    const addNewUserHandler = (newUser: UserType) => {
        setCurrentUser(newUser);
        saveStateToSessionStorage<UserType>('user', newUser);
    }

    useEffect(() => {
       setCurrentUser(getStateFromSessionStorage<UserType>('user'))
    }, [])

    return (
        <SSiteWrapper>
            <SSiteHeader>
                <SMainText>
                    This is chat for people who are alone
                </SMainText>
                <SMainText>
                    You can
                    <a href={window.location.href} target={"_blank"}>
                        open another tab
                    </a>
                    and chat with yourself!
                </SMainText>
            </SSiteHeader>
            <SChat>
                {currentUser
                    ? <ChatContent user={currentUser} />
                    : <AddNewUserName addNewUser={addNewUserHandler} />
                }
            </SChat>
        </SSiteWrapper>
    );
}

export default App;

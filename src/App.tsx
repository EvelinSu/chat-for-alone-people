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

    const [user, setUser] = useState<UserType | null>()

    const getUserFromSS = async () => {
        const currentUser = await getStateFromSessionStorage<UserType>('user')
        currentUser ? setUser(currentUser) : setUser(null)
    }

    const addNewUserHandler = (newUser: UserType) => {
        setUser(newUser)
        saveStateToSessionStorage<UserType>('user', newUser)
    }

    useEffect(() => {
        getUserFromSS()
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
                {user
                    ? <ChatContent user={user} />
                    : <AddNewUserName addNewUser={addNewUserHandler} />
                }
            </SChat>
        </SSiteWrapper>
    );
}

export default App;

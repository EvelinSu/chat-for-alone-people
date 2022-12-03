import React, {useEffect, useState} from 'react';
import {SChat} from "./components/Message/styled";
import {SMainText, SSiteHeader, SSiteWrapper} from "./components/styled";
import {ChatContent} from "./components/Chat/ChatContent";
import {AddNewUserName} from "./components/AddNewUserName/AddNewUserName";
import {getStateFromSS, saveStateToSS} from "./common/utils/sessionStorage";

export type UserType = {
    id: string
    name: string
    avatarColor: string
}

function App() {

    const [user, setUser] = useState<UserType | null>()

    const getUserFromSS = async () => {
        const currentUser = await getStateFromSS<UserType>('user')
        currentUser ? setUser(currentUser) : setUser(null)
    }

    const addNewUserHandler = (newUser: UserType) => {
        setUser(newUser)
        saveStateToSS<UserType>('user', newUser)
    }

    useEffect(() => {
        getUserFromSS()
    }, [])

    return (
        <SSiteWrapper>
            <SSiteHeader>
                <SMainText>
                    This is chat for alone people
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

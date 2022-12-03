import React, {FC, useState} from 'react';
import {Input, SAddNewUserName, SAddNewUserNameForm, SButton, SText} from "./styled";
import {UserType} from "../../App";
import {v1} from "uuid";
import {getRandomColor} from "../../common/utils/getRandomColor";


type TAddNewUserNameProps = {
    addNewUser: (newUser: UserType) => void
}
export const AddNewUserName: FC<TAddNewUserNameProps> = (props) => {
    const [userName, setUserName] = useState('')

    const onClickHandler = () => {
        const randomColor = getRandomColor()
        const newUser: UserType = {
            id: v1(),
            name: userName,
            avatarColor: randomColor
        }
        props.addNewUser(newUser)
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onClickHandler()
    }

    return (
        <SAddNewUserName>
            <SText>
                Please, enter your name
            </SText>
            <SAddNewUserNameForm>
                <Input
                    value={userName}
                    onKeyDown={onKeyDownHandler}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                />
                <SButton
                    onClick={onClickHandler}
                    disabled={!userName.trim()}
                >
                    Save
                </SButton>
            </SAddNewUserNameForm>
        </SAddNewUserName>
    );
};


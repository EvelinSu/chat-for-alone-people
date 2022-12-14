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
        if (userName.trim().length < 1) return
        const randomColor = getRandomColor()
        const newUser: UserType = {
            id: v1(),
            name: userName.trim(),
            avatarColor: randomColor
        }
        props.addNewUser(newUser)
    }

    const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
                    onKeyUp={onKeyUpHandler}
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


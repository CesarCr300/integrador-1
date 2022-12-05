import { IUserRegister } from "@/models"
import { userService } from "@/services"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router";

export const registerUser = async (data: IUserRegister, dispatch: Dispatch<any>, createUser: ActionCreatorWithPayload<any, string>, navigate: NavigateFunction) => {
    const userId = await userService.register(data);
    if (userId === null) {
        return;
    }
    dispatch(createUser({
        name: data.name,
        lastName: data.lastName,
        userId: userId
    }));

    navigate("/home")
}
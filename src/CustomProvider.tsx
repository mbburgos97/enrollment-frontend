import React from "react";
import { Provider, createStoreHook } from "react-redux";
import { store } from "./store";

type Props = {
    children: React.ReactNode
}

export const CustomProvider: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

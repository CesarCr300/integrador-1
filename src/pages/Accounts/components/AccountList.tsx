import { useState, useEffect } from "react";
import { IAccount } from "@/models/account.model";
import { deleteAccount, getAccounts } from "../application/account.application";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { IconDelete } from "@/components/Icons/IconDelete";


export const AccountList = () => {
    const user = useSelector((store: AppStore) => store.user);
    const [accounts, setAccounts] = useState<IAccount[] | null>([]);
    useEffect(() => {
        getAccounts(user.userId, setAccounts);
    }, [])

    return (
        <section>
            {accounts?.map(account => <article key={account.id}>{account.name}<IconDelete onClick={() => { deleteAccount(account.id, setAccounts) }}></IconDelete></article>)}
        </section>
    )
}
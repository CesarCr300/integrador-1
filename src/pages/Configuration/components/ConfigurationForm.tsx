import { useState, useEffect } from "react";
import { IConfigurationNotification } from "@/models/configuration.model";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Button } from "@/components/Buttons/Button";
import { updateConfigurationNotification } from "../application/configuration.application";

export const ConfigurationForm = () => {
    const user = useSelector((store: AppStore) => store.user);
    const [isChecked, setIsChecked] = useState(false)
    const [formValues, setFormValues] = useState
        <IConfigurationNotification>({
            userId: user.userId,
            sendNotification: isChecked
        });
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    useEffect(() => {
        setFormValues((prevState) => { return { ...prevState, sendNotification: isChecked } })
    }, [isChecked]);

    const handleSubmit = () => {
        updateConfigurationNotification(formValues);
    }

    return (
        <form>
            <div>
                <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={isChecked}
                    onChange={handleOnChange}
                />
                Enviar notificaciones
            </div>
            <Button text="Guardar" onClick={() => { handleSubmit() }} />
        </form>
    )
}

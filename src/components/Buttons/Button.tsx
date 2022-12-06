import "./Button.css"
import { IButtonProps } from "./ButtonInterface"

export const Button = (props: IButtonProps) => {
    return (
        <div className="btn" onClick={props.onClick}>{props.text}</div>
    )
}

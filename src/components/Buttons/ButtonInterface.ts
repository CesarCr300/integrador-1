export interface IButtonProps {
    text: string;
    onClick: ((() => void) | ((e: any) => void));
}
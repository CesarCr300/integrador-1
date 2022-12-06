import { useEffect } from 'react'

interface RowProps {
    gap?: number;
    children: any;
}

export const Row = ({ gap = 20, children }: RowProps) => {
    const style = { display: "flex", gap: `${gap}px` }

    return (
        <div style={style}>{children}</div>
    )
}

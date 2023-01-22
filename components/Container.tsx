import React, { FC } from "react";

interface ContainerProps{
    children: React.ReactNode
}

export const Container:FC<ContainerProps> = ({children}) => (
    <div style={{
        maxWidth: '1120px',
        padding :'0 20px',
        width: '100%',
        height: '100%',
        margin: '0 auto'
    }}>
        {children}
    </div>
)
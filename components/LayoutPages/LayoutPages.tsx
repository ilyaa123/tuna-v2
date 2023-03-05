import { FC } from "react";

import { SideBar } from "../SideBar/SideBar";

import { Box } from "@mui/system";

interface ProfileLayoutProps{
    children?: React.ReactNode
}

export const LayoutPages:FC<ProfileLayoutProps> = ({children}) => {

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box>
                {children}
            </Box>
        </Box>
    )
}
import { FC } from "react";

import { Box } from "@mui/system"
import { Divider } from "@mui/material";

import { NavigationPanel } from "../NavigationPanel/NavigationPanel";


export const SideBar:FC = () => {

	return (
		<Box
            sx={{ width: { sm: 240 } }}
            >
			<NavigationPanel />
          	<Divider />
        </Box>
	)
}
import { FC } from "react";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";

export const NavigationPanel:FC = () => {

    const router = useRouter()

    return (
        <div>
            <List>
                <ListItem >
                    <ListItemButton onClick={() => router.push('/profile')}>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        <ListItemText primary="Профиль" />
                    </ListItemButton>
              	</ListItem>
				<ListItem >
                    <ListItemButton onClick={() => router.push('/resume')}>
                        <ListItemText primary="Резюме" />
                    </ListItemButton>
              	</ListItem>
				<ListItem >
                    <ListItemButton>
                        <ListItemText primary="Проекты" />
                    </ListItemButton>
              	</ListItem>
				<ListItem >
                    <ListItemButton>
                        <ListItemText primary="Достижения" />
                    </ListItemButton>
              	</ListItem>
				<ListItem >
                    <ListItemButton>
                        <ListItemText primary="Отклики" />
                    </ListItemButton>
              	</ListItem>
          </List>
        </div>
    )
}
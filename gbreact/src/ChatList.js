import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



export default function InsetList() {

    
      

    var chats =[
        {
            id:1,
            name:'chat 1'
        },
        {
            id:2,
            name:'chat 2'
        },
        {
            id:3,
            name:'chat 3'
        },
        {
            id:4,
            name:'chat 4'
        },
    ]
  return (
    
        <List
      sx={{ width: '100%', maxWidth: 360}}
      aria-label="contacts"
    >
      {chats.map((chat => {
                return (
                    
                    <ListItem key={chat.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                             </ListItemIcon>
                            <ListItemText primary={chat.name} />
                        </ListItemButton>
                    </ListItem>
                )
            }))}
      
    </List>
    
  );
}

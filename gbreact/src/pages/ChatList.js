import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {CustomLink} from '../component/CustomLink';



export default function InsetList() {

      
    const [chatsList, setChatsList] = React.useState([
        {
            id:1,
            name:'chat 1',
        
        },
        {
            id:2,
            name:'chat 2',
        },
        {
            id:3,
            name:'chat 3',
        },
        {
            id:4,
            name:'chat 4',
        }, 
        {
            id:5,
            name:'chat 5',
        },
        {
            id:6,
            name:'chat 6',
        },
        {
            id:7,
            name:'chat 7',
        },
        {
            id:8,
            name:'chat 8',
        },
        {
            id:9,
            name:'chat 9',
        },
        {
            id:10,
            name:'chat 10',
        },
        {
            id:11,
            name:'chat 11',
        },
    ]);

    function getId (array) {

        return array[array.length -1].id +1;
    }
  return (

        <List
            sx={{ width: '100%', maxWidth: 360}}
            aria-label="contacts"
            >
            {chatsList.map((chat => {
                        return (
                            <ListItem key={chat.id} disablePadding>
                                <ListItemButton>
                                    <CustomLink to={`/chat/${chat.id}`}>{chat.name}</CustomLink>
                                </ListItemButton>
                                <ListItemButton onClick={() => setChatsList(prevState =>[... prevState.filter((item) => item.id !== chat.id)])}>удалить чат</ListItemButton>
                            </ListItem>
                        )
                    }))}
            <ListItemButton onClick={() => setChatsList(prevState =>[... prevState,{
                id:getId(prevState),
                name:`chat ${getId(prevState)}`,
                messages:[]
            }])}>добавить чат</ListItemButton>
        </List>
  );
}
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import CustomLink from '../component/CustomLink';



export default function InsetList() {

      
    const [chatsList, setChatsList] = React.useState([
        {
            id:1,
            name:'chat 1',
            messages:[]
        },
        {
            id:2,
            name:'chat 2',
            messages:[]
        },
        {
            id:3,
            name:'chat 3',
            messages:[]
        },
        {
            id:4,
            name:'chat 4',
            messages:[]
        }, 
        {
            id:5,
            name:'chat 5',
            messages:[]
        },
        {
            id:6,
            name:'chat 6',
            messages:[]
        },
        {
            id:7,
            name:'chat 7',
            messages:[]
        },
        {
            id:8,
            name:'chat 8',
            messages:[]
        },
        {
            id:9,
            name:'chat 9',
            messages:[]
        },
        {
            id:10,
            name:'chat 10',
            messages:[]
        },
        {
            id:11,
            name:'chat 11',
            messages:[]
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
                                    <CustomLink to={'/Chat'}>{chat.name}</CustomLink>
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
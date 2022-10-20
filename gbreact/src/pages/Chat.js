import React, { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';

const Chat = () => {

    var date = new Date(Date.now());
    var dateNow = date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })

    const [messageList, setMessageList] = React.useState([
        {
            id:11,
            text:'это 1 чат',
            author:'Лёха',
            date:dateNow,
            chatId:1

        },
        {
            id:12,
            text:'это 2 чат',
            author:'Лёха',
            date:dateNow,
            chatId:2

        },
        {
            id:13,
            text:'это 3 чат',
            author:'Лёха',
            date:dateNow,
            chatId:3

        },
        {
            id:15,
            text:'это 10 чат',
            author:'Лёха',
            date:dateNow,
            chatId:10

        },
        {
            id:14,
            text:'это 4 чат',
            author:'Лёха',
            date:dateNow,
            chatId:4

        }
    ]);
    const refMessage = useRef(null);
    const refName = useRef(null);
    const chatId = useParams();
    

    function getId (array) {
        return array.length + 1
    }
    useEffect(() => {
        setTimeout(() =>{
            const lastAuthor = messageList[messageList.length - 1];
            if(lastAuthor && lastAuthor.author) {
                setMessageList(prevState => [... prevState ,{
                    id:getId(prevState),
                    text:'Ждите ' + lastAuthor.author +' и может вам ответят',
                    date:dateNow,
                }])
            }
        },1500)
    },[messageList]);
    
    
    return (
        <Box>
            Ваше имя : 
            <input autoFocus={true}  ref={refName}></input>
            Ваше сообщение : 
            <input autoFocus={true}   ref={refMessage}></input>
            <Button onClick={() => setMessageList(prevState =>[... prevState,{
                id:getId(prevState),
                text:refMessage.current.value,
                author:refName.current.value,
                date:dateNow,
                chatId:chatId.id
            }])}>Отправить</Button>
            {messageList.map((message => {
                if (message.chatId == chatId.id) {
                    return (
                        <Box key={message.id}>
                            {message.author}
                            {message.date}
                            {message.text}
                        </Box>
                    )
                }
                
            }))}
        </Box>
    ); 
};



export default Chat;
import React, { useEffect, useRef } from 'react';
import { Button, Input } from '@mui/material';
import { Box } from '@mui/system';

const Chat = props => {

    const [messageList, setMessageList] = React.useState([]);
    const refMessage = useRef(null);
    const refName = useRef(null);
    var date = new Date(Date.now());
    var dateNow = date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
     console.log(messageList);

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
                    date:dateNow
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
                date:dateNow
            }])}>Отправить</Button>
            {messageList.map((message => {
                return (
                    <Box key={message.id}>
                        {message.author}
                        {message.date}
                        {message.text}
                    </Box>
                )
            }))}
        </Box>
    ); 
};



export default Chat;
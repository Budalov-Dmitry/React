import React, { useEffect, useRef } from 'react';

const Chat = props => {

    const [messageList, setMessageList] = React.useState([]);
    const refMessage = useRef(null);
    const refName = useRef(null);
    var date = new Date(Date.now());
    useEffect(() => {
        setTimeout(() =>{
            const lastAuthor = messageList[messageList.length - 1];
            if(lastAuthor && lastAuthor.author) {
                setMessageList(prevState => [... prevState ,{
                    text:'Ждите ' + lastAuthor.author +' и может вам ответят',
                    date:date.toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          })
                }])
            }
        },1500)
    },[messageList]);
    
    
    return (
        <div>
            Ваше имя
            <input ref={refName}></input>
            Ваше сообщение
            <input ref={refMessage}></input>
            <button onClick={() => setMessageList(prevState => [... prevState ,{
                text:refMessage.current.value,
                author:refName.current.value,
                date:date.toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })
            }])}>Отправить</button>
            {messageList.map((message => {
                return (
                    <div>
                        {message.author}
                        {message.date}
                        {message.text}
                    </div>
                )
            }))}
        </div>
    ); 
};



export default Chat;
import { useEffect, useState } from "react";

import { msg } from "../../../types/chat";

interface ListProps {
    items: msg[];
}

const Chat = (props:ListProps) => {

    const [items, setItems] = useState<msg[]>([]);

    useEffect(()=> {
        setItems(props.items);
    }, [props.items])

    return (
        <ul className="chat__list">
            {items.map((message, index) => (
                <li key={index} className="chat__message bg-primary">
                    <span className="chat__message-subject">
                        {message.from}
                    </span>
                    <p className="chat__message-body">
                        {message.msg}
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default Chat;
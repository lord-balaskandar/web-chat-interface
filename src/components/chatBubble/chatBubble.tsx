import './chatBubble.css'

function ChatBubble({children, rec, id}: {children: String, rec: boolean, id: Number}) {
    return <div className={"bubble" + (rec ? " left" : " right")} >
        <div className='chatText'>
            {children}
        </div>
    </div>
}

export default ChatBubble;
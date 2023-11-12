import './chatBubble.css'

function ChatBubble({children, rec}: {children: String, rec: boolean}) {
    return <div className={"bubble" + (rec ? " left" : " right")} >
        <div className='chatText'>
            {children}
        </div>
    </div>
}

export default ChatBubble;
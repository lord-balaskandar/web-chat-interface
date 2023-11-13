import { useRef, useEffect } from "react"
import ChatBubble from "../chatBubble/chatBubble"
import './chatModal.css'

function ChatModal({data} : {data: any}) {
    const div = useRef<any>(null)

    const scrollToBottom =() => {
      div.current?.scrollIntoView({ behavior: "smooth", block: "end"  })
    }

    const mapMessages= (messages: any[]) => {
        let res:{[key: string]: any[]} = {};
        messages.forEach((item) => {
            let date = new Date(item.time).toDateString();
            if(res[date]) res[date] = res[date].concat([<ChatBubble rec={item.rec}>{item.value}</ChatBubble>])
            else res[date]=[<ChatBubble rec={item.rec}>{item.value}</ChatBubble>]
        })
        let final: any[] = []
        Object.keys(res).forEach((item) => {
            res[item].forEach((mes, i) => {
                if(res[item][i+1]  && res[item][i+1].time - mes.time >= 20000) res[item] = res[item].splice(i, 0, <div className="chatSpacer"></div>)
            })
            final = final.concat([(<div className="chatDate">{item}</div>)].concat(res[item]))
        })
        return final;
    }
  
    useEffect(() => {
      scrollToBottom()
    }, [div])
    
    return <div className='chat' ref={div}>
      {mapMessages(data)}
    </div>
}

export default ChatModal
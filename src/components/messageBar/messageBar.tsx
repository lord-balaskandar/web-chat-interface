import { useRef } from 'react'
import './messageBar.css'

function MessageBar({data, setData}: {data: any[], setData: Function,}) {
    const input = useRef<any>(null)
  
    const onEnterPress: any = ((e: any) => {
        if((e.type == "click" || e.charCode === 13) && input.current.value.split("").filter((item: any) => item !== "").length > 0) {
            console.log(input.current.value)

           setData(data.concat([{
            value: e.target.value,
            time: new Date().getTime(),
            rec: false,
           }]))
           e.target.value=""
        }
    })

    return  <div className='messageBarContainer'>
    <div className="messageBar"><input className="inputText" onKeyPress={onEnterPress} ref={input} /><button className='inputButton' onClick={onEnterPress}>SEND</button></div></div>

}

export default MessageBar;
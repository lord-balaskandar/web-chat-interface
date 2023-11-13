import { useRef, useEffect } from "react";
import ChatBubble from "../chatBubble/chatBubble";
import "./chatModal.css";

function ChatModal({ data, div }: { data: any; div: any }) {
  const scrollToBottom = () => {
    div.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [div, data]);

  const mapMessages = (messages: any[]) => {
    let res: { [key: string]: any[] } = {};
    messages.forEach((item) => {
      let date = new Date(item.time).toDateString();
      if (res[date]) res[date] = res[date].concat([item]);
      else res[date] = [item];
    });
    let final: any[] = [];
    Object.keys(res).forEach((item) => {
      res[item].forEach((e, i) => {
        if (res[item][i + 1] && res[item][i + 1].time - e.time >= 20000)
          res[item] = [
            res[item].slice(0, i + 1),
            "spacer",
            res[item].slice(i + 1),
          ].flat();
      });
      final = final.concat(
        [<div className="chatDate">{item}</div>].concat(
          res[item].map((item) => {
            return item === "spacer" ? (
              <div className="chatSpacer"></div>
            ) : (
              <ChatBubble id={item.id} rec={item.rec}>
                {item.value}
              </ChatBubble>
            );
          })
        )
      );
    });
    return final;
  };

  return (
    <div className="chat" ref={div}>
      {mapMessages(data)}
    </div>
  );
}

export default ChatModal;

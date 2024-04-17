import React, { Ref } from "react";
import InfiniteScroll from "react-infinite-scroller";

interface ChatDTO {
  senderId: string;
  receiverId: string;
  sendImg: string;
  message: string;
  isRead: number;
  chatroomNo: number;
  sendTime: Date;
}

interface ChatMessageListProps {
  messagesEndRef: Ref<HTMLDivElement>;
  messages: ChatDTO[];
  fetchMessages: () => Promise<void>;
  writer: string;
  newMessage: string;
  onNewMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messagesEndRef,
  messages,
  fetchMessages,
  writer,
  newMessage,
  onNewMessageChange,
  onSendMessage,
}) => {
  const handleLoadMore = () => {
    fetchMessages();
  };

  return (
    <>
      <div id="scrollableDiv" className="chat-messages" ref={messagesEndRef}>
        <InfiniteScroll
          loadMore={handleLoadMore}
          hasMore={false} // 무한 스크롤 관련 로직을 사용하지 않음
          loader={<h4>Loading...</h4>}
          useWindow={false}
        >
          {messages.map((msg, idx) => (
            <div key={idx}>
              {msg.senderId} : {msg.message}
            </div>
          ))}
        </InfiniteScroll>
      </div>

      <div className="input-group">
        <input
          type="text"
          value={newMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onNewMessageChange(e.target.value)
          }
        />
        <button className="send-button" onClick={onSendMessage}>
          Send
        </button>
      </div>
    </>
  );
};

export default ChatMessageList;

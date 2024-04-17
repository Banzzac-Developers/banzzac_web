import React, { useCallback, useEffect, useRef, useState } from "react";
import { Client, IMessage } from "@stomp/stompjs";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./ChatMessagePage.css";
import ChatMessageList from "../../components/ChatMessageList";

interface ChatDTO {
  senderId: string;
  receiverId: string;
  sendImg: string;
  message: string;
  isRead: number;
  chatroomNo: number;
  sendTime: Date;
}

const ChatMessagePage: React.FC = () => {
  const { roomId } = useParams();
  const [loading, setLoading] = useState(true);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<ChatDTO[]>([]);
  const [writer, setWriter] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollTo(0, messagesEndRef.current.scrollHeight);
  };

  const loadInitChatMessages = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost/api/chat/zkdlwjsxm@example.com/1`,
      );
      const responseMessages = response.data as ChatDTO[];
      setMessages(responseMessages);
      setLoading(false);
    } catch (error) {
      console.error("채팅 내역 로드 실패", error);
    }
  }, [roomId]);

  const client = new Client({
    brokerURL: "ws://localhost/chat", // 서버 WebSocket URL
    reconnectDelay: 5000,
  });

  useEffect(() => {
    if (loading) {
      loadInitChatMessages();
    }

    client.onConnect = () => {
      client.subscribe(`/topic/public`, (message: IMessage) => {
        const msg: ChatDTO = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    };

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, [loadInitChatMessages, loading, roomId]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost/api/chat/zkdlwjsxm@example.com/1`,
      );

      const responseMessages = response.data as ChatDTO[];
      setMessages((prevMessages) => [...prevMessages, ...responseMessages]);
      scrollToBottom();
    } catch (error) {
      console.error("채팅 내역 로드 실패", error);
    }
  };

  const onNewMessageChange = (value: string) => {
    setNewMessage(value);
  };

  const onSendMessage = () => {
    if (stompClient && newMessage) {
      const chatMessage: ChatDTO = {
        senderId: "zkdlwjsxm@example.com",
        receiverId: "example2@example.com",
        isRead: 1,
        sendImg: "",
        sendTime: new Date(),
        message: newMessage,
        chatroomNo: 1,
      };
      console.log(roomId);

      stompClient.publish({
        destination: `/app/chat/rooms/1/send`,
        body: JSON.stringify(chatMessage),
      });

      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div>
        <Link to={"/chat"} className="back-link">
          뒤로 가기
        </Link>
      </div>
      <ChatMessageList
        messagesEndRef={messagesEndRef}
        messages={messages}
        fetchMessages={fetchMessages}
        writer={writer}
        newMessage={newMessage}
        onNewMessageChange={onNewMessageChange}
        onSendMessage={onSendMessage}
      />
    </div>
  );
};

export default ChatMessagePage;

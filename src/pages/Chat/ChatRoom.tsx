import React, { useCallback, useEffect, useRef, useState } from "react";
import { Client, IMessage } from "@stomp/stompjs";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./ChatMessagePage.css";
import ChatMessageList from "../../components/ChatMessageList";
import SquareButton from "@components/Button/SquareButton";

interface ChatDTO {
  senderId: string;
  senderNickname?: string;
  receiverId: string;
  receiverNickname?: string;
  sendImg?: string;
  message: string;
  isRead: number;
  chatroomNo: number;
  sendTime?: Date;
  sendTimeStr?: string;
}

const ChatMessagePage: React.FC = () => {
  const { oppId, chatroomNo } = useParams();
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
        `http://localhost/api/chat/zkdlwjsxm@example.com/${chatroomNo}`, //zkdlwjsxm@example.com 부분은 session id 받아서
      );
      const responseMessages = response.data as ChatDTO[];
      setMessages(responseMessages);
      setLoading(false);
    } catch (error) {
      console.error("채팅 내역 로드 실패", error);
    }
  }, [oppId]);

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
        console.log(
          "message",
          message,
          "oppId",
          oppId,
          "chatroomNo",
          chatroomNo,
        );
      });
    };

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, [loadInitChatMessages, loading, oppId]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost/api/chat/zkdlwjsxm@example.com/${chatroomNo}`, //zkdlwjsxm@example.com 부분은 session id 받아서
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
        senderId: "zkdlwjsxm@example.com", //zkdlwjsxm@example.com 부분은 session id 받아서
        senderNickname: "최성재", //session nickname 받아서
        receiverId: oppId || "",
        isRead: 1,
        sendImg: "",
        sendTime: new Date(),
        message: newMessage,
        chatroomNo: Number(chatroomNo),
        sendTimeStr: "",
      };

      stompClient.publish({
        destination: `/app/chat/rooms/${chatroomNo}/send`,
        body: JSON.stringify(chatMessage),
      });

      setNewMessage("");
    }
  };

  const handleGoBack = () => {
    if (stompClient) {
      stompClient.deactivate();
    }
  };

  const reportUser = () => {
    axios.get(`http://localhost/api//zkdlwjsxm@example.com/${chatroomNo}`);
  };

  return (
    <div className="chat-container">
      <div>
        <Link
          to={"/chat/zkdlwjsxm@example.com"} //zkdlwjsxm@example.com 부분은 session id 받아서
          onClick={handleGoBack}
          className="back-link"
        >
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
      <div>
        <SquareButton
          title="신고하기"
          fill={false}
          backgroundColor="#212121"
          onClick={() => {
            confirm("신고하시겠습니까?");
          }}
        />
        <SquareButton
          title="차단하기"
          fill={false}
          backgroundColor="#212121"
          onClick={() => {
            confirm("차단하시겠습니까?");
          }}
        />
      </div>
    </div>
  );
};

export default ChatMessagePage;

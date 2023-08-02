import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { FaTimes, FaUserCircle, } from "react-icons/fa";
import io from 'socket.io-client';
// import { useChatState } from '../../Context/ChatProvider';

import { getAllUsers } from '../../services/userService';
import { getChatMessages, sendChatMessages, getAllChats } from '../../services/chatMessageService';
const ENDPOINT = 'http://localhost:5000'

let socket, selectedChatCompare;
const EnquiryCenter = () => {

  const [open, setOpen] = useState(false);
  const [enquiryUser, setEnquiryUser] = useState()
  const [allChats, setAllChats] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [opendChat, setOpenedChat] = useState([]);
  const [loggedInUser, setUser] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  // const { selectedChat, setSelectedChat, user, notification, setNotification } = useChatState();

  useEffect(() => {
    getAdminDetails()
    fetchAllChats()
  }, []);

  useState(() => {
    selectedChatCompare = enquiryUser ? enquiryUser._id : null
  }, [enquiryUser ? enquiryUser._id : null])

  const getAdminDetails = () => {
    socket = io(ENDPOINT)
    const storedData = localStorage.getItem('logindata');
    const userData = storedData ? JSON.parse(storedData) : null;
    if (userData) {
      setUser(userData)
      setupSocket(userData)
    }
    // socket.on("message recieved", (newMessageRecieved) => {
    //   console.log('newMessageRecieved', newMessageRecieved)
    //   if (!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id) {
    //     /// give notification
    //   } else {
    //     setChatMessages((prevMessages) => [...prevMessages, newMessageRecieved]);
    //   }
    // })
  }

  const setupSocket = (user) => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connection", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
    handleNewMessage()
  };

  const fetchAllChats = async () => {
    try {
      // if (!enquiryUser) return;
      const data = await getAllChats()
      if (data) setAllChats(data)
    } catch (error) {
      console.log('No Data ', error)

    }
  }
  const fetchMessages = async (user) => {
    try {
      const data = await getChatMessages(user._id)
      setChatMessages([...data]);
      socket.emit("join chat", user);

    } catch (error) {
      console.log('error in fetch Messages', error)

    }
  };
  // useEffect(() => {
  //   selectedChatCompare = enquiryUser;
  //   allChats.forEach((chat) => {
  //     chat.users.forEach((user) => {
  //       if (user.user_type !== 'A') {
  //         fetchMessages(user._id);
  //       }
  //     });
  //   });
  // }, [allChats]);

  // useEffect(() => {
  //   socket.on("message recieved", (newMessageRecieved) => {
  //     if (
  //       !selectedChatCompare || // if chat is not selected or doesn't match current chat
  //       selectedChatCompare._id !== newMessageRecieved.chat._id
  //     ) {
  //       // if (!notification.includes(newMessageRecieved)) {
  //       //   setNotification([newMessageRecieved, ...notification]);
  //       //   setFetchAgain(!fetchAgain);
  //       // }
  //     } else {
  //       // setChatMessages((prevMessages) => [...prevMessages, newMessageRecieved]);
  //     }
  //   });
  // });
  const handleNewMessage = () => {
    socket.on("message recieved", (newMessageRecieved) => {
      setChatMessages((prevMessages) => [...prevMessages, newMessageRecieved]);

      if (!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id) {
        /// give notification
      } else {
        // Add the new message to the chatMessages state
        setChatMessages((prevMessages) => [...prevMessages, newMessageRecieved]);
      }
    })
  };

  const handleSendMessage = async (event) => {
    if (inputValue.trim() !== '') {
      socket.emit("stop typing", loggedInUser._id);
      let msg = {
        content: inputValue,
        chatId: opendChat._id,
      }
      try {
        const data = await sendChatMessages(msg)
        socket.emit("new message", data);
        setChatMessages((prevMessages) => [...prevMessages, data]);
        setInputValue('');

      } catch (error) {
        console.log('Some error', error)

      }
    }
  };



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOpen = async (chat, user) => {
    let roomId = user._id
    socket.emit("join chat", roomId)
    setEnquiryUser(user)
    setOpenedChat(chat)
    await fetchMessages(user)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div className='app_container'>
        <Header />
        <div className="content" style={{ marginLeft: '160px', padding: '20px', paddingTop: '8px' }}>
          <div className="m-auto">
            <div >
              <h4 style={{ marginTop: '20px', textAlign: 'center' }}>Enquiry Center</h4>
              <div style={{ marginTop: '20px' }} className="table-box table-responsive">
                <table className="table">
                  <thead className="thead-light">
                    <tr className='th-bg'>
                      <th style={{ fontWeight: 700 }}>User Name</th>
                      <th style={{ fontWeight: 700 }}>Email</th>
                      <th style={{ fontWeight: 700 }}>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allChats && allChats.map((chat, index) => chat.users.map((user, index) =>
                      user.user_type !== 'A' ? (<tr key={new Date(user.createdAt)}>
                        <td>{user.full_name}</td>
                        <td>{user.email}</td>
                        <td>
                          <button onClick={() => handleOpen(chat, user)} className='btn btn-sm themebtnbg'>Enquiry</button>
                        </td>
                      </tr>) : null
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Modal
        style={{ width: '80%', borderRadius: 10 }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box style={{ width: '40%', position: 'absolute', top: '20%', backgroundColor: 'white', left: '40%', borderRadius: 10 }} >
            <div className="modal_header">
              <div className="modal_logo">
                <div style={{ display: 'flex' }}>
                  <FaUserCircle size={24} color="white" />
                  <div style={{ marginLeft: '12px' }}>
                    <h5>{enquiryUser?.full_name}</h5>
                  </div>
                </div>
              </div>
              <div onClick={handleClose} className="modal_close">
                <FaTimes size={18} color="red" />
              </div>
            </div>
            {chatMessages.length ? (
              <div className="chatbox">
                <div className="chatbox-messages">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`chatbox-message ${message?.sender?._id === loggedInUser._id ? 'sender-you' : 'sender-other'
                      }`}>
                      {message?.content}
                    </div>
                  ))}
                </div>
                <div className="chatbox-input">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                  />
                  <button className='themebtnbg' onClick={handleSendMessage}>Send</button>
                </div>
              </div>) : null}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default EnquiryCenter;
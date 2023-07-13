import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
    Box,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { FaTimes, FaUserCircle, } from "react-icons/fa";


const EnquiryCenter = () => {
  const [enqdata,setEnqdata] = useState([
    {
      name:'User1',
      email:'rajesh@olivetech.net',
      messages:[
        {
          id:1,
          message:'Hello',
          sender:'user1'
        },
        {
          id:2,
          message:'Hi',
          sender:'you'
        }
      ]
    },
    {
      name:'User2',
      email:'manish@olivetech.net',
      messages:[
        {
          id:1,
          message:'Hi i need help',
          sender:'user2'
        },
        {
          id:2,
          message:'Tell me What help you want',
          sender:'you'
        }
      ]
    }
  ])
  const [open, setOpen] = React.useState(false);
  const [messagedata,setMessagedata] = useState()
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
const handleOpen = (item) => {
  setMessagedata(item);
  setMessages(item.messages)
  setOpen(true)
}
const handleClose = () => {
  setMessages([]);
  setMessagedata();
  setOpen(false)
}

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const message = {
        id:messages.length + 1,
        message:inputValue,
        sender:'you'
      }
      setMessages([...messages, message]);
      setInputValue('');
    }
  };

    return ( 
        <>
            <div className='app_container'>
                <Header />
                <div className="content" style={{marginLeft:'160px',padding:'20px',paddingTop:'8px'}}>
         
        
       
       
        <div className="m-auto">

           
            <div >
      <h4 style={{marginTop:'20px',textAlign:'center'}}>Enquiry Center</h4>
      <div style={{marginTop:'20px'}} className="table-box table-responsive">
                    <table  className="table">
                        <thead className="thead-light">
                            <tr className='th-bg'>
                                <th style={{fontWeight:700}}>User Name</th>
                                <th style={{fontWeight:700}}>Email</th>
                                <th style={{fontWeight:700}}>Message</th>
                                <th style={{fontWeight:700}}>Actions</th>
                                {/* <th>Record Data</th> */}
                            </tr>
                        </thead>
                        <tbody>
                         {enqdata && enqdata.map((k,index)=>
                            <tr key={index}>
                                
                                <td>{k.name}</td>
                                <td>{k.email}</td>
                                <td>{k.messages[0].message}</td>
                               <td>
                                <button onClick={() => handleOpen(k)} className='btn btn-sm themebtnbg'>Enquiry</button>
                                </td>
                               
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
      {/* <Table style={{width:'800px',marginTop:'28px'}} className="responsive">
                <TableHead>
                  <TableRow style={{border:'1px solid gray'}}>
                    <TableCell
                    sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                      }}
                      component="th"
                      scope="row"
                    >
                      User Name
                    </TableCell>
                    <TableCell
                     sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                        fontSize: "lg",
                      }}
                      component="th"
                      scope="row"
                    >
                      Email
                    </TableCell>
                    <TableCell
                    sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                        fontSize: "lg",
                      }}
                     
                      component="th"
                      scope="row"
                    >
                      Message
                    </TableCell>

                    <TableCell
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                        fontSize: "lg",
                      }}
                      component="th"
                     
                      scope="row"
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {enqdata && enqdata.length > 0 ? 
                    enqdata.map((k,index) => {
                      return(
                        <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { borderBottom: 0 },
                    }}
                    style={{border:'1px solid gray'}}
                  >
                    <TableCell
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                      }}
                      component="th"
                      scope="row"
                    >
                      {k.name}
                    </TableCell>
                    <TableCell
                     sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                      }}
                      component="th"
                      scope="row"
                    >
                      {k.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                      }}
                      component="th"
                      scope="row"
                    >
                      {k.messages[0].message}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: {
                          xs: "none",
                          md: "table-cell",
                          lg: "table-cell",
                        },
                        borderRight: "1px solid gray",
                        fontSize: "lg",
                      }}
                      component="th"
                      scope="row"
                    >
                      <Button
                          onClick={() => handleOpen(k)}
                        className="!bg-buynowbtnbg"
                        variant="contained"
                      >
                       Enquiry
                      </Button>
                    </TableCell>
                  </TableRow>
                      )
                    }) : null
                  }
                  
                </TableBody>
              </Table> */}
      </div>
      </div>
     
     
      </div>
      <Footer />
      </div>
      <Modal 
       style={{width:'80%',borderRadius:10}}
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
         <Box style={{width:'40%',position:'absolute',top:'20%',backgroundColor:'white',left:'40%',borderRadius:10}} >
        
           <div className="modal_header">
          
             <div className="modal_logo">
              <div style={{display:'flex'}}>
                <FaUserCircle size={24} color="white" />
              <div style={{marginLeft:'12px'}}>
                <h5>{messagedata?.name}</h5>
              </div>
              </div>

             </div>
             <div onClick={handleClose} className="modal_close">
                <FaTimes size={18} color="red" />
             </div>
           </div>
           
           <div className="chatbox">
      <div className="chatbox-messages">
        {messages.map((message, index) => (
          <div  key={index}  className={`chatbox-message ${
            message.sender === 'you' ? 'sender-you' : 'sender-other'
          }`}>
            {message.message}
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
    </div>
         </Box>
       </Fade>
     </Modal>
        </>
     );
}
 
export default EnquiryCenter;
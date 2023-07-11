import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@mui/material";

const EnquiryCenter = () => {
    return ( 
        <>
            <div className='app_container'>
                <Header />
                <div className='content'>
               
      <div style={{display:'flex',width:'100%'}}>
      <div className='m-auto'>
      <h4 style={{marginTop:'20px',textAlign:'center'}}>Enquiry Center</h4>
      <Table style={{width:'800px',marginTop:'28px'}} className="responsive">
                <TableHead>
                  <TableRow style={{border:'1px solid gray'}}>
                    <TableCell
                    //   className="border-r border-gray-300 !text-lg"
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

                    {/* <TableCell
                      className="border-r border-gray-300 !text-lg md:!block lg:!block sm:!hidden"
                      component="th"
                      scope="row"
                    >
                      Actions
                    </TableCell> */}
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
                      User1
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
                      user1@olivetech.net
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
                      Hello
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
                      //   className="!text-lg"
                      scope="row"
                      //   className="border-r border-gray-300 !text-md sm:hidden"
                      //   component="th"
                      //   scope="row"
                    >
                      <Button
                        //   onClick={() => handleOpen()}
                        className="!bg-buynowbtnbg"
                        variant="contained"
                      >
                       Enquiry
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
      </div>
      </div>
     
     
      </div>
      <Footer />
      </div>
     
        </>
     );
}
 
export default EnquiryCenter;
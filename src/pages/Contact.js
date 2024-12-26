import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, TableCell, TableContainer, TableRow, Table, Typography, TableHead, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:5, ml:10, "& h4":{fontWeight:'bold', mb:2 }}}>
          <Typography variant='h4'>
            Contact My Restaurent

          </Typography>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

        </Box>
        <Box sx={{ m:3, width:"600px", ml:10, "@media (max-width:600px)":{
          width:"300px",
        }}}> 
          <TableContainer component={Paper}>
            <Table aria-lable="contact table">
              <TableHead>
                <TableBody>
                <TableRow>
                <TableCell sx={{ bgcolor:'black', width:"600px", color:'white', }}align='center'>Contact Details</TableCell>
              </TableRow>
                  <TableRow>
                    <TableCell>
                  <SupportAgentIcon sx={{ color:'blue', pt:1 }} /> +120-180-0000-000 (toll free)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <EmailIcon sx={{ color:'blue', pt:1 }} /> sameeropticals@gmail.com 
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <CallIcon sx={{ color:'blue', pt:1 }} /> 7836812697
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableHead>
            </Table>

          </TableContainer>
        </Box>
    </Layout>
  );
};


export default Contact;
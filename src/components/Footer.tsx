import React from "react";
import { styled } from '@mui/material/styles';

const Footer = styled('div')(({ theme }) => ({
  backgroundColor: 'blue',
  padding: '20px',
  
  // Add more styles as needed
}));

const MyComponent = () => {
  return (
    <Footer style={{background: 'linear-gradient(to right, #8B5CF6, #2563EB)'}}>
      {/* Your component content */}
      This is Footer component  
      {/* ในส่วนนี้ที่ผมคิดไว้คืออยากจะทำเป็นปุ่ม home อะไรทำนองนี้ครับ คล้ายๆกับ facebook */}
    </Footer>
  );
};

export default MyComponent;

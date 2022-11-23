import React from "react";
import styled from "styled-components";

const ContactM = styled.div`
  max-width: 2200px;
  height: 100vh;
  display: grid;
  background-color: blue;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

function Contact() {
  return <ContactM></ContactM>;
}

export default Contact;

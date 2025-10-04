import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://mamaquillatx.com";

interface NewUserProps {
  userName: string;
  userEmail: string;
  userPhone: string;
  userMessage: string;
}
export const NewUser = ({
  userName,
  userEmail,
  userPhone,
  userMessage,
}: NewUserProps) => (
  <Html>
    <Head />
    <Preview>New client submitted form!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/mamaquillalogo.png`}
          width="200"
          alt="Logo"
          style={logo}
        />
        <Text style={paragraph}>
          A new client submitted the form from the website and wants to get in
          contact with you!
        </Text>
        <Text style={paragraph}>
          <strong>Client Name:</strong> {userName},
        </Text>
        <Text style={paragraph}>
          <strong>Client Email:</strong> {userEmail}
        </Text>
        <Text style={paragraph}>
          <strong>Client Phone:</strong> {userPhone}
        </Text>
        <Text style={paragraph}>
          <strong>Client Message:</strong> {userMessage}
        </Text>
        <Text style={paragraph}>Get in touch with the client ASAP</Text>
        <Hr style={hr} />
        <Text style={footer}>MAMA QUILLA</Text>
      </Container>
    </Body>
  </Html>
);

NewUser.PreviewProps = {
  userName: "Nicolas",
  userEmail: "info@email.mamaquillatx.com",
  userPhone: "3165382781",
  userMessage:
    "This is a preview message from the user that just submitted the form to know how is the layout and styles of the mail",
} as NewUserProps;

export default NewUser;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

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

interface WelcomeEmailProps {
  userName: string;
}

const baseUrl = "https://mamaquillatx.com";

export const WelcomeEmail = ({ userName }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      MAMA QUILLA. Will get in touch with you as soon as possible.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/mamaquillalogo.png`}
          width="200"
          alt="Logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {userName},</Text>
        <Text style={paragraph}>
          Thank you for contacting Mama Quilla. We are committed to providing
          exceptional service. We will get back to you as soon as possible.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>MAMA QUILLA</Text>
        <Text style={footer}>info@email.mamaquillatx.com</Text>
      </Container>
    </Body>
  </Html>
);

WelcomeEmail.PreviewProps = {
  userName: "Nico",
} as WelcomeEmailProps;

export default WelcomeEmail;

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

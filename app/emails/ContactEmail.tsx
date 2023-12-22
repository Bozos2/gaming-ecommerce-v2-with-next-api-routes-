import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactFormEmailPage: React.FC<Readonly<ContactFormEmailProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Contact form info</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Contact form info</Heading>
        <Text style={heroText}>
          User: {firstName} {lastName} Email: {email}
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmailPage;

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginRight: "50px",
  marginBottom: "30px",
  padding: "43px 23px",
};

const confirmationCodeText = {
  fontSize: "20px",
  textAlign: "center" as const,
  verticalAlign: "middle",
};

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface newsletterProps {
  email: string;
}

const NewstletterSubPage: React.FC<Readonly<newsletterProps>> = ({ email }) => (
  <Html>
    <Head />
    <Preview>Your subscription successfully accepted</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Newsletter Subscription</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            🎉✨🎊 Thank you {email} for loyality! 🎉✨🎊
          </Text>
          <Text style={paragraph}>
            If you didn't request this, please ignore this email.
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />- GameLoot store Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>GameLoot store.</Text>
        <Text style={footer}>Our dummy address 2930</Text>
      </Container>
    </Body>
  </Html>
);

export default NewstletterSubPage;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};

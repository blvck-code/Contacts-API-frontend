import React from "react";
import {
  Container,
  Header,
  List,
  Message,
  Placeholder,
} from "semantic-ui-react";
import AppHeader from "../../../component/Header";
import ImageThumb from "../../../component/ImageThumb";
import Favorites from "../Favorites";

const ContactsListUI = ({ state: { contacts, loading, error } }) => {
  return (
    <>
      <AppHeader />
      <Container>
        <span
          style={{
            backgroundColor: "red",
            padding: "10px 20px",
            margin: "0 auto",
            width: "100vw",
            color: "#fff",
          }}>
          This project is still being developed
        </span>

        <Header>STARRED</Header>
        <Favorites
          favorites={contacts.filter((item) => item.is_favorite)}
          loading={loading}
        />

        <Header>ALL</Header>

        {loading && (
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        )}

        {!loading && contacts.length === 0 && (
          <Message content="No contacts yet" />
        )}

        <List>
          {contacts.length > 0 &&
            contacts.map((contact) => (
              <List.Item key={contact.id}>
                <List.Content floated="right">
                  <span>{contact.phone_number}</span>
                </List.Content>
                <List.Content style={{ display: "flex", alignItems: "center" }}>
                  <ImageThumb
                    firstName={contact.first_name}
                    lastName={contact.last_name}
                    style={{ borderRadius: "50%" }}
                    src={contact.contact_pic}
                    style={{ width: 45, height: 45 }}
                  />
                  {/* <Image circular height={45} width={45} scr={contact.contact_pic} /> */}
                  <span>
                    {contact.first_name} {contact.last_name}
                  </span>
                </List.Content>
              </List.Item>
            ))}
        </List>
      </Container>
    </>
  );
};

export default ContactsListUI;

import React, { useEffect } from "react";
import Header from "../../component/Header";
import { connect } from "react-redux";
import { fetchContacts } from "../../redux/actions/contacts";
import ContactsListUI from "../../layout/Contacts/List";

const ContactsComponent = ({ fetchContacts, contactState }) => {
  document.title = "Contacts | Homepage";

  useEffect(() => {
    if (contactState.contacts.length === 0) {
      fetchContacts();
    }
  }, []);

  return <ContactsListUI state={contactState} />;
};

const mapStateToProps = (state) => ({
  contactState: state.contactState.contacts,
});

export default connect(mapStateToProps, { fetchContacts })(ContactsComponent);

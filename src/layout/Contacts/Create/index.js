import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Form,
  Grid,
  Header as SemanticHeader,
  Icon,
  Select,
} from "semantic-ui-react";
import Header from "../../../component/Header";
import { createContact } from "../../../redux/actions/contacts";
import { connect } from "react-redux";
import countries from "../../../utils/countries";
import "./index.css";
import { Prompt, useHistory } from "react-router-dom";
import clearCreateContact from "../../../constants/clearCreateContact";

const CreateContact = ({
  clearCreateContact,
  readURL,
  contactPic,
  imagePickerRef,
  choseImage,
  onChange,
  form,
  formInvalid,
  createContact,
  addContact: { loading, data, error },
}) => {
  const history = useHistory();

  useEffect(() => {
    if (data) {
      history.push("/");
    }
    return () => {
      clearCreateContact();
    };
  }, [data]);

  const formIsHalfFilled =
    Object.values(form).filter((item) => item && item !== "")?.length > 0 &&
    !data;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("loading", loading);
    console.log("data", data);
    createContact(form);
  };

  return (
    <div>
      <Prompt
        when={formIsHalfFilled}
        message="You have unsaved changes, sure you want to leave ?"
      />
      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>Create Contact</SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form onSubmit={onSubmit} unstackable>
                <div className="image-wrapper">
                  <input
                    type="file"
                    accept="image/**"
                    ref={imagePickerRef}
                    onChange={readURL}
                    hidden
                  />
                  {contactPic && (
                    <img className="contact-pic" src={contactPic} />
                  )}
                  {!contactPic && (
                    <div onClick={choseImage} className="contact-pic">
                      <span>Choose picture</span>
                    </div>
                  )}
                  <Icon onClick={choseImage} name="pencil" />
                </div>
                <Form.Group widths={2} style={{ marginBottom: "10px" }}>
                  <Form.Input
                    label="First Name"
                    name="firstName"
                    onChange={onChange}
                    placeholder="First Name"
                  />
                  <Form.Input
                    label="Last Name"
                    name="lastName"
                    onChange={onChange}
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group widths={2} style={{ marginBottom: "10px" }}>
                  <Form.Input
                    label="Country"
                    name="countryCode"
                    control={Select}
                    options={countries}
                    onChange={onChange}
                    placeholder="Country"
                  />
                  <Form.Input
                    label="Phone Number"
                    name="phoneNumber"
                    onChange={onChange}
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <Form.Checkbox
                  name="isFavorite"
                  onChange={(e, data) => {
                    onChange(e, { name: "isFavorite", value: data.checked });
                  }}
                  label="Add to favorite"
                />
                <Button
                  disabled={formInvalid || loading}
                  onClick={onSubmit}
                  loading={loading}
                  primary
                  type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default connect(null, { clearCreateContact, createContact })(
  CreateContact
);

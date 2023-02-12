import React, { useState } from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";

const Register = () => {

  const [userdata, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  const setUserDetails = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  // console.log(userdata);
  const submitData = (e) => {
    e.preventDefault();
    console.log(userdata);
  };
  const [userStatus, setUserStatus] = useState("Active");
  const [userImage, setUserImage] = useState("");

  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Enter User Details</h2>
        <Card className="shadow mt-3 p-3">
          <div className="profile_div text-center">
            <img src="./user.png" alt="user icon" />
          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  onChange={setUserDetails}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  onChange={setUserDetails}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={setUserDetails}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  onChange={setUserDetails}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Gender</Form.Label>

                <Form.Check
                  type={"radio"}
                  label={`Male`}
                  value={"Male"}
                  name="gender"
                  onChange={setUserDetails}
                />
                <Form.Check
                  type={"radio"}
                  label={`Female`}
                  value={"Female"}
                  name="gender"
                  onChange={setUserDetails}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Status</Form.Label>

                <Select options={options} />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Upload Profile Image</Form.Label>
                <Form.Control type="file" name="user_upload" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  onChange={setUserDetails}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onSubmit={(e) => {
                  submitData(e);
                }}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;

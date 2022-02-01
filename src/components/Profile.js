import React, { Component } from "react";
// import initialLIFF from "../services/InitLineLiff";
import liff from "@line/liff";
import { Button, Card } from "react-bootstrap";
const LIFF_ID = "1656852806-GeOAABVl";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: "",
      pictureUrl: "",
      result: "",
    };
  }

  componentDidMount() {
    // initialLIFF();
    liff
      .init({ liffId: LIFF_ID })
      .then(async () => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            this.setState({ name: profile.displayName });
            this.setState({ status: profile.statusMessage });
            this.setState({ pictureUrl: profile.pictureUrl });
          });
        } else {
          liff.login();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  scanQr = () => {
    liff.scanCodeV2().then((value) => {
      this.setState({ result: value.value });
      console.log(this.state.result);
    });
  };

  render() {
    return (
      <div
        class="w-50 p-3 mx-auto mt-5 border border-dark rounded"
        align="center"
      >
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={this.state.pictureUrl} />
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>{this.state.status}</Card.Text>
          </Card.Body>
        </Card>
        <div class="mt-3">
          <Button variant="primary" onClick={this.scanQr}>
            SCAN QR
          </Button>{" "}
        </div>
        <div class="mt-3">
          <a href={this.state.result} target="_blank">{this.state.result}</a>
        </div>
      </div>
    );
  }
}
export default Profile;

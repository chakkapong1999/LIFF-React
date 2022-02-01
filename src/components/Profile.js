import React, { Component } from "react";
// import initialLIFF from "../services/InitLineLiff";
import liff from "@line/liff";
const LIFF_ID = "1656852806-GeOAABVl";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: "",
      pictureUrl: "",
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

  render() {
    return (
      <div>
        <h1> {this.state.name} </h1>
        <p> {this.state.status} </p>
        <img src={this.state.pictureUrl} alt="Profile" />
      </div>
    );
  }
}
export default Profile;

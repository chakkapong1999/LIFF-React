import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { Button, Card } from "react-bootstrap";
const LIFF_ID = "1656852806-GeOAABVl";

function Profile() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    function initialLIFF() {
      liff.init({ liffId: LIFF_ID }).then(async () => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            setName(profile.displayName);
            setStatus(profile.statusMessage);
            setPictureUrl(profile.pictureUrl);
          });
        } else {
          liff.login().then(
            liff.getProfile().then((profile) => {
              setName(profile.displayName);
              setStatus(profile.statusMessage);
              setPictureUrl(profile.pictureUrl);
            })
          );
        }
      });
    }
    initialLIFF();
  }, []);

  const scanQr = () => {
    liff.scanCodeV2().then((result) => {
      setResult(result.value);
    });
  };

  return (
    <div
      class="w-50 p-3 mx-auto mt-5 border border-dark rounded"
      align="center"
    >
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{status}</Card.Text>
        </Card.Body>
      </Card>
      <div class="mt-3">
        <Button variant="primary" onClick={scanQr}>
          SCAN QR
        </Button>{" "}
      </div>
      <div class="mt-3">
        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}
export default Profile;

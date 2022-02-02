import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { Button, Card, Container } from "react-bootstrap";
import {
  setUserId,
  setDisplayName,
  setStatusMessage,
  setPictureUrl,
} from "../stores/lineProfile";
import { useDispatch, useSelector } from "react-redux";
const LIFF_ID = "1656852806-GeOAABVl";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const name = user.displayName;
  const status = user.statusMessage;
  const picture = user.pictureUrl;

  const [result, setResult] = useState("");

  useEffect(() => {
    function initialLIFF() {
      liff.init({ liffId: LIFF_ID }).then(async () => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            dispatch(setUserId(profile.userId));
            dispatch(setDisplayName(profile.displayName));
            dispatch(setStatusMessage(profile.statusMessage));
            dispatch(setPictureUrl(profile.pictureUrl));
          });
        } else {
          liff.login().then(
            liff.getProfile().then((profile) => {
              dispatch(setUserId(profile.userId));
              dispatch(setDisplayName(profile.displayName));
              dispatch(setStatusMessage(profile.statusMessage));
              dispatch(setPictureUrl(profile.pictureUrl));
            })
          );
        }
      });
    }
    initialLIFF();
  }, [dispatch]);

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
      <Container>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{status}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <div class="mt-3">
          <Button variant="info" onClick={scanQr}>
            SCAN QR
          </Button>{" "}
        </div>
        <div class="mt-3">
          <a href={result} target="_blank" rel="noreferrer">
            {result}
          </a>
        </div>
      </Container>
    </div>
  );
}
export default Profile;

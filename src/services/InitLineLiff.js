import liff from "@line/liff";
import { useSelector, useDispatch } from "react-redux";
import {store} from "./stores/index";
import {
  setUserId,
  setDisplayName,
  setStatusMessage,
  setPictureUrl,
} from "./stores/lineProfile";

const LIFF_ID = "1656852806-GeOAABVl";
store.user.dispatch(setUserId("MAX"))
export default function initialLIFF() {
  liff
    .init({ liffId: LIFF_ID })
    .then(async () => {
      if (liff.isLoggedIn()) {
        liff.getProfile().then((profile) => {
          return profile;
        });
      } else {
        liff.login();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

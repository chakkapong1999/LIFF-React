import liff from "@line/liff";
import { store } from "./stores/index";

const LIFF_ID = "1656852806-GeOAABVl";
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

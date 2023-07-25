import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((result) => {
    const { body } = result[0];
    const { firstName, lastName } = result[1];
    console.log(`${body} ${firstName} ${lastName}`);
  });
}

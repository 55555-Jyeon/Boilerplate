import * as yup from "yup";
import { INVALID, REGEXP } from "./regexp";
import ERROR from "../assets/mismatch.png";

// log in
export const SignInSchema = yup.object().shape({
  email: yup.string(),
  phoneNum: yup.string(),
  Username: yup.string().min(10),
  password: yup.string().min(8).max(20),
});

// sign up
export const SignUpSchema = yup.object().shape({
  fullName: yup.string(),
  Username: yup.string(),
  email: yup.string(),
  password: yup.string(),
});

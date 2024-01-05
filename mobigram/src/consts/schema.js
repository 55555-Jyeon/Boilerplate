import * as yup from "yup";
import { REGEXP } from "./regexp";

// log in
export const SignInSchema = yup.object().shape({
  email: yup.string().matches(REGEXP.email, "이메일 양식이 올바르지 않습니다"),
  phoneNum: yup
    .string()
    .matches(REGEXP.phone, "010-0000-0000 형식에 맞게 입력해주세요"),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required("password must be 8 - 15 characters"),
});

// sign up
export const SignUpSchema = yup.object().shape({
  fullName: yup.string().required("fullName is required"),
  nickName: yup
    .string()
    .min(4)
    .max(10)
    .required("nickName must be 4 - 8 characters"),
  email: yup.string().matches(REGEXP.email, "이메일 양식이 올바르지 않습니다"),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required("password must be 8 - 15 characters"),
});

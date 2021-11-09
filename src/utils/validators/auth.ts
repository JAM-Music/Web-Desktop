import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un email válido")
    .required("Introduzca su correo electrónico"),
  password: Yup.string().required("Introduzca su contraseña"),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un email válido")
    .required("Introduzca su correo electrónico"),
  first_name: Yup.string().required("Introduzca su nombre"),
  last_name: Yup.string().required("Introduzca su apellido"),
  password: Yup.string().required("Introduzca su contraseña"),
  passwordConfirm: Yup.string()
    .required("Confirme su contraseña")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
});

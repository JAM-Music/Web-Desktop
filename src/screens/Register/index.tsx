import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { UserCredentials } from "@src/utils/types/user";
import { LoginSchema } from "@utils/validators/auth";
import { Input, Button } from "@nature-ui/core";
import { Link } from "react-router-dom";

export type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
  const [generalError, setGeneralErr] = useState();
  const [loading, setLoading] = useState(false);
  const { handleChange, handleSubmit, setErrors, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" } as UserCredentials,
      validationSchema: LoginSchema,
      onSubmit(values) {
        setGeneralErr(undefined);
        setLoading(true);
      },
    });

  return (
    <div className=" bg-BG">
      <div className="container mx-auto h-screen p-40">
        <div className="flex justify-center flex-col items-center">
          <div className="text-SECONDARY text-4xl font-bold">Registrate</div>
          <div>
            <Input
              variant="flushed"
              placeholder="Nombre"
              className="bg-BG text-TEXT mt-10"
            />
            <Input
              variant="flushed"
              placeholder="Apellidos"
              className="bg-BG text-TEXT mt-10"
            />
            <Input
              variant="flushed"
              placeholder="Correo"
              className="bg-BG text-TEXT mt-10"
            />
            <Input
              variant="flushed"
              placeholder="Contraseña"
              className="bg-BG text-TEXT mt-10"
            />
            <Input
              variant="flushed"
              placeholder="confirma contraseña"
              className="bg-BG text-TEXT mt-10"
            />
            <div className="flex justify-start mt-10 items-start w-full text-left">
              <div className="text-TEXT mr-1">¿Ya tienes cuenta? </div>
              <Link to="/" className="text-LINKS">
                Inicia sesion
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <Button color="PRIMARY" text="TEXT">
              Iniciar sesion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

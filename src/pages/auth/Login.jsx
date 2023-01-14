import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import logo from "../../assets/icons/logo.png";
const Login = () => {
  // this is the error message handler
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const [loading, setLoading] = useState();
  return (
    <div>
      <div className="w-full lg:flex hidden justify-center items-center h-screen ">
        <div className="w-[450px] h-[529px] flex flex-col items-center card_shadow">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="text-center mt-[31px]">
            <h1 className="text-[18px] font-bold leading-[23px]">
              Hi, Welcome
            </h1>
            <p className="text-[#747474] text-[14px] font-[500] leading-[10px]">
              Please sign-in to your account and start your experience
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              // perform login logic here

              const email = values.email;
              const password = values.password;
              //   dispatch(loginAction(email, password, toast, router));
              //   setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, isSubmitting, handleSubmit }) => (
              <Form action="" className="w-full mt-[24px] space-y-4">
                <div className="w-full flex flex-col ">
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    values={values.email}
                    className="w-full px-[12px] h-[51px] border border-black/50 rounded-lg"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    className="text-red-400 text-[12px] "
                    name="email"
                    component="div"
                  />
                </div>
                <div className="w-full flex flex-col ">
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    values={values.password}
                    className="w-full px-[12px] h-[51px] border border-black/50 rounded-lg"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    className="text-red-400 text-[12px] "
                    name="password"
                    component="div"
                  />
                </div>
                <div className="w-full flex space-y-2 flex-col mt-6  items-center ">
                  {!loading ? (
                    <button
                      type="submit"
                      className="w-full h-[51px] auth_button bg-black text-white rounded-lg text-[15px] font-[500]"
                    >
                      LOGIN
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-2 lg:py-2 xl:py-3 bg-black text-white rounded-lg"
                    >
                      <SyncLoader color="#fff" size={10} />
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
          <p className="mt-14">
            Don't have an account?{" "}
            <Link to="/" className="text-[#B91C1C] font-[500]">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

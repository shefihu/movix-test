import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import logo from "../../assets/icons/logo.png";
const Register = () => {
  // this is the error message handler
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    fullName: Yup.string().required("Full Name is required"),
  });
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full lg:flex hidden justify-center items-center h-screen ">
        <div className="w-[450px] h-[604px] flex flex-col items-center card_shadow">
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
              fullName: "",
              email: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              // perform login logic here

              const email = values.email;
              const password = values.password;
              const fullName = values.fullName;
              //   dispatch(loginAction(email, password, toast, router));
              //   setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, isSubmitting, handleSubmit }) => (
              <Form action="" className="w-full mt-[24px] space-y-4">
                <div className="w-full flex flex-col ">
                  <Field
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    values={values.fullName}
                    className="w-full px-[12px] h-[51px] border border-black/50 rounded-lg"
                    placeholder="Full Name"
                  />
                  <ErrorMessage
                    className="text-red-400 text-[12px] "
                    name="fullName"
                    component="div"
                  />
                </div>
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
                      onClick={() => navigate("/home")}
                      className="w-full h-[51px] bg-black text-white rounded-lg auth_button text-[15px] font-[500]"
                    >
                      REGISTER
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
            Already have an account?{" "}
            <Link to="/login" className="text-[#B91C1C] font-[500]">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

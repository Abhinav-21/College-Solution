import React, { useState } from "react";
import AppLogo from "../images/AppLogo";
import { serverUnauth } from "../../helpers/apiCall";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Footer = () => {
  const appInApp = useSelector((state) => state.appInApp.appInApp);
  const [success, setSuccess] = useState(false);
  if (appInApp === "true") {
    return;
  }

  const handleSubscribe = (values, resetForm, setSubmitting, setErrors) => {
    serverUnauth
      .post("/subscriber/create", { email: values.email })
      .then((res) => {
        resetForm();
        setSuccess(true);
      })
      .catch((err) => {
        setErrors({ email: err?.response?.data?.error });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <footer className="text-gray-200 body-font bg-secondary">
      <div className="max-w-screen-xl px-5 py-24 mx-auto">
        <div className="flex justify-between flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base lg:text-lg mb-3">
              CONTACT US
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-2">
              <li>
                <a
                  className="text-gray-200 hover:text-white"
                  href="mailto:adi2004dixit@gmail.com"
                >
                  <span className="font-bold text-white">Email :</span>{" "}
                  adi2004dixit@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="text-gray-200 hover:text-white"
                  href="tel:+919555236825"
                >
                  <span className="font-bold text-white">Call :</span>{" "}
                  +91-9555236825
                </a>
              </li>
              {/* <li>
                <a
                  className="text-gray-200 hover:text-white"
                  href="https://goo.gl/maps/NDxWersMjiMszKnm8"
                  target="_blank"
                >
                  <span className="font-bold text-white">Address :</span>{" "}
                  117/H-1/606, Model Town, Pandu Nagar, Kanpur, Uttar Pradesh
                  208005
                </a>
              </li> */}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex items-start justify-center">
            <AppLogo width="250px" height="250px" classname="" logotType={2} />
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-base lg:text-lg mb-3">
              NEWSLETTER
            </h2>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Not a valid Email.")
                  .required("This is required."),
              })}
              onSubmit={(values, { resetForm, setSubmitting, setErrors }) => {
                handleSubscribe(values, resetForm, setSubmitting, setErrors);
              }}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                isSubmitting,
                touched,
                errors,
              }) => {
                return (
                  <div className="flex flex-col items-start gap-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      className=" border-2 border-secondary bg-white w-full rounded text-secondary p-2 focus:border-white focus:outline-0"
                    />
                    {success &&
                    !touched.email &&
                    !errors.email &&
                    values.email.length === 0 ? (
                      <p className="text-sm text-green-400 mt-1">
                        Successfully Subscribed to the Newsletter
                      </p>
                    ) : null}
                    {touched.email && errors.email ? (
                      <p className="text-sm text-red-400 mt-1">
                        {errors.email}
                      </p>
                    ) : null}
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className={`w-2/3 lg:w-44 text-whitetext-2xl bg-primary rounded p-2 text-white uppercase ${
                        isSubmitting ? "opacity-50" : "opacity-100"
                      } `}
                      disabled={isSubmitting}
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                );
              }}
            </Formik>
            <span className="inline-flex lg:ml-auto lg:mt-4 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a
                className="text-gray-200 hover:text-white"
                href="#"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-200 hover:text-white"
                href="#"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-200 hover:text-white"
                href="#"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-200 hover:text-white"
                href=""
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Mnnit
          </p>
          <div className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Hope you are doing great.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

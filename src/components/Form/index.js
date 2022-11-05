import { useFormik } from "formik";
import classes from "./Form.module.css";
import * as Yup from "yup";

const Form = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };

  const submitForm = (values) => {
    Formik.resetForm();
  };

  const Formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      first_name: Yup.string().required("This field is required"),
      last_name: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required"),
      message: Yup.string()
        .max(60, "Must be 60 characters or less")
        .required("Please enter a message"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  return (
    <>
      <form className={classes.form} onSubmit={Formik.handleSubmit}>
        <h2 className={classes.heading}>Contact Me</h2>
        <p className={classes.desc}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <div className={classes.grid}>
          <div className={classes["form-group"]}>
            <label htmlFor="first_name">First Name</label>
            <input
              className={classes.input}
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.first_name}
            />
            {Formik.touched.first_name && Formik.errors.first_name ? (
              <p className={classes.error}>{Formik.errors.first_name}</p>
            ) : null}
          </div>

          <div className={classes["form-group"]}>
            <label htmlFor="last_name">Last Name</label>
            <input
              className={classes.input}
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.last_name}
            />
            {Formik.touched.last_name && Formik.errors.last_name ? (
              <p className={classes.error}>{Formik.errors.last_name}</p>
            ) : null}
          </div>
        </div>

        <div className={classes["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            className={classes.input}
            type="email"
            id="email"
            name="email"
            placeholder="yourname@email.com"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.email}
          />
          {Formik.touched.email && Formik.errors.email ? (
            <p className={classes.error}>{Formik.errors.email}</p>
          ) : null}
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="message">Message</label>
          <textarea
            className={classes.input}
            type="text"
            id="message"
            name="message"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.message}
          ></textarea>
          {Formik.touched.message && Formik.errors.message ? (
            <p className={classes.error}>{Formik.errors.message}</p>
          ) : null}
        </div>

        <label className={classes.checkbox}>
          <input type="checkbox" id="agree" name="agree" required />
          <span
            role="checkbox"
            aria-checked="false"
            aria-required
            className={classes.customcheckbox}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <p>
            You agree to providing your data to Franklin Okolie who may contact
            you.
          </p>
        </label>
        <button type="submit" className={classes.submit} id="btn__submit">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Form;

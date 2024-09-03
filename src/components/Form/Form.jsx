import css from "./Form.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

export default function MyForm() {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    bookingDate: Yup.string().required("Booking date is required"),
    comment: Yup.string(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    // Імітація успішної відправки форми
    toast.success("Booking successful!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    resetForm();
  };

  return (
    <div className={css.container}>
      <p className={css.title}>Book your campervan now</p>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                className={css.formInput}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                className={css.formInput}
              />
              <ErrorMessage
                name="email"
                component="div"
                lassName={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                type="date"
                id="bookingDate"
                name="bookingDate"
                placeholder="Booking date*"
                className={css.formInput}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                lassName={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
                className={css.formInput}
              />
              <ErrorMessage
                name="comment"
                component="div"
                lassName={css.errorMessage}
              />
            </div>

            <button
              type="submit"
              className={css.submitButton}
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}

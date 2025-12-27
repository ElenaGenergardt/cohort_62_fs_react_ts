import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { FormContainer, InputsContainer, Title } from "./styles";
import { CONTACT_US_VALUES } from "./types";

const validationSchema = Yup.object().shape({
  [CONTACT_US_VALUES.FULLNAME]: Yup.string()
    .required("Full name field is required")
    .min(3, "Full name field should contain min 3 characters")
    .max(50, "Full name field should contain max 50 characters"),
  [CONTACT_US_VALUES.PHONE]: Yup.string()
    .required("Phone field is required")
    .min(4, "Phone field should contain min 4 characters")
    .max(20, "Phone field should contain max 20 characters"),
  [CONTACT_US_VALUES.EMAIL]: Yup.string()
    .required("Email field is required")
    .min(6, "Email field should contain min 6 characters")
    .max(60, "Email field should contain max 60 characters"),
});

function ContactUs() {
  // name у элементов формы должен совпадать с ключом обьекта initialValues
  const formik = useFormik({
    initialValues: {
      [CONTACT_US_VALUES.FULLNAME]: "",
      [CONTACT_US_VALUES.PHONE]: "",
      [CONTACT_US_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id={"full_name-id"}
          name={CONTACT_US_VALUES.FULLNAME}
          placeholder={"Your full name"}
          label={"Full name"}
          value={formik.values[CONTACT_US_VALUES.FULLNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.FULLNAME]}
        />
        <Input
          id={"Phone-id"}
          name={CONTACT_US_VALUES.PHONE}
          placeholder={"Your phone number"}
          label={"Phone"}
          value={formik.values[CONTACT_US_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.PHONE]}
        />
        <Input
          id={"Email-id"}
          name={CONTACT_US_VALUES.EMAIL}
          placeholder={"Your email"}
          label={"Email"}
          value={formik.values[CONTACT_US_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.EMAIL]}
        />
      </InputsContainer>
      <Button name="SEND REQUEST" type="submit" />
    </FormContainer>
  );
}
export default ContactUs;

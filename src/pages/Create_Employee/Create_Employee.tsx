import { AppLayoutContext } from "../Layout/Layout";
import { Container, FormaWrapper } from "./styles";
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { DATA } from "./types";


// Ваплидация формы с помощью Yup
const validationSchema = Yup.object().shape({
  [DATA.NAME]: Yup.string()
    .required("Name field is required")
    .min(2, "Minimum 2 characters")
    .max(50, "Maximum 50 characters"),

  [DATA.LAST_NAME]: Yup.string()
  .required("Last name field is required")
  .min(2, "Minimum 2 characters")
  .max(15, "Maximum 15 characters"),

  [DATA.AGE]: Yup.string()
    .required("Age field is required")
    .min(1, "Minimum 1 characters")
    .max(3, "Maximum 3 characters"),

  [DATA.JOB_POSITION]: Yup.string()
  .required("Job position field is required")
  .min(1, "Minimum 1 characters")
  .max(30, "Maximum 30 characters"),
});

function Create_Employee() {
  //Получаем контекст приложения
  

 const { setEmployee } = useContext(AppLayoutContext);
//Инициализируем formik для управления формой
  const formik = useFormik({
    initialValues: {
      [DATA.NAME]: "",
      [DATA.LAST_NAME]: "",
      [DATA.AGE]: "",
      [DATA.JOB_POSITION]: "",
    },
    // Подключаем схему валидации
    validationSchema: validationSchema,
    // Отключаем валидацию при изменении полей
    validateOnChange: false,

    // Обработчик отправки формы
    onSubmit: (values) => {
      setEmployee((prev) => {
        return [...prev, {
          name: values[DATA.NAME],
          lastName: values[DATA.LAST_NAME],
          age: values[DATA.AGE],
          jobPosition: values[DATA.JOB_POSITION],
        }]
      });
      
    }
    
     
  });
  return (
    <FormaWrapper onSubmit={formik.handleSubmit}>
      <Container>
        <Input
          id="name-id"
          name={DATA.NAME}
          placeholder="Enter your name"
          label="Name"
          value={formik.values[DATA.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[DATA.NAME]}
        />
        <Input
          id="last-name-id"
          name={DATA.LAST_NAME}
          placeholder="Enter your last name"
          label="Last Name"
          value={formik.values[DATA.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[DATA.LAST_NAME]}
        />
        <Input
          id="age-id"
          name={DATA.AGE}
          placeholder="Enter your age"
          label="Age"
          value={formik.values[DATA.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[DATA.AGE]}
        />
        <Input
          id="job-id"
          name={DATA.JOB_POSITION}
          placeholder="Enter your job position"
          label="Job Position"
          value={formik.values[DATA.JOB_POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[DATA.JOB_POSITION]}
        />

        <Button name="Login" type="submit" />
      </Container>
    </FormaWrapper>
  );
}
export default Create_Employee;

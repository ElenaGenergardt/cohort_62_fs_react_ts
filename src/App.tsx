// Импортируем BrowserRouter, Route, Routes для настройки маршрутизации
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lessons
import GlobalStyles from "styles/GlobalStyles";
// import Lesson_06 from "lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";
// import Lesson_10 from "lessons/Lesson_10/Lesson_10";
// import Lesson_12 from "lessons/Lesson_12/Lesson_12";

// Homeworks
// import Homework_06 from "./homeworks/Homework_06/Homework_06";
// import Homework_07 from "homeworks/Homework_07/Homework_07";
// import Homework_08 from "homeworks/Homework_08/Homework_08";
// import Homework_09 from "homeworks/Homework_09/Homework_09";
// import Homework_10 from "homeworks/Homework_10/Homework_10";
// import Homework_11 from "homeworks/Homework_11/Homework_11";

import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "components/ContactUs/ContactUs";
import Clients from "pages/Clients/Clients";
import Valencia from "pages/Clients/Valencia/Valencia";
import Sigma from "pages/Clients/Sigma/Sigma";
import X_Ivision from "pages/Clients/X_Ivision/X_Ivision";
import { ROUTES } from "constants/routes";
import Lesson_14 from "lessons/Lesson_14/Lesson_14";


function App() {
  return (
  <BrowserRouter>
   <GlobalStyles />
  {/* <Lesson_06 /> */}
  {/* <Lesson_07/> */}
  {/* <Homework_07 /> */}
 {/* <Layout >
  <Routes>
    <Route path={ROUTES.HOME} element= {<Home/>}></Route>
     <Route path={ROUTES.ABOUT} element= {<About/>}></Route>
      <Route path={ROUTES.LOGIN} element= {<LogIn/>}></Route>
       <Route path={ROUTES.CONTACT_US} element= {<ContactUs/>}></Route>
        <Route path={ROUTES.NOT_FOUND} element= "Page Not Found"></Route>
        <Route path={ROUTES.CLIENTS} element= {<Clients/>}></Route>
        <Route path={ROUTES.VALENCIA} element= {<Valencia/>}></Route>
        <Route path={ROUTES.SIGMA} element= {<Sigma/>}></Route>
        <Route path={ROUTES.X_IVISION} element= {<X_Ivision/>}></Route>
       
  </Routes>
 </Layout> */}
  {/* <Lesson_08 /> */}
  {/* <Homework_08 /> */}
  {/* <Lesson_09 /> */}
  {/* <Homework_09 /> */}
  {/* <Lesson_10 /> */}
  {/* <Homework_10 /> */}
  {/* <Homework_11/> */}
  {/* <Test/> */}
  {/* <Lesson_12 /> */}
  <Lesson_14 />
  </BrowserRouter>
  );
}
export default App;

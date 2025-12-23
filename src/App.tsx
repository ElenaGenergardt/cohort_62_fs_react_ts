
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lessons
import GlobalStyles from "styles/GlobalStyles";
// import Lesson_06 from "lessons/Lesson_06/Lesson_06";
// import Homework_07 from "homeworks/Homework_07/Homework_07";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Homework_08 from "homeworks/Homework_08/Homework_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";
// import Homework_09 from "homeworks/Homework_09/Homework_09";
// import Lesson_10 from "lessons/Lesson_10/Lesson_10";
// import Homework_10 from "homeworks/Homework_10/Homework_10";
// import Homework_11 from "homeworks/Homework_11/Homework_11";
// import Lesson_12 from "lessons/Lesson_12/Lesson_12";
import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
// import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";



// Homeworks
// import Homework_06 from "./homeworks/Homework_06/Homework_06";

function App() {
  return (
  <BrowserRouter>
   <GlobalStyles />
  {/* <Lesson_06 /> */}
  {/* <Lesson_07/> */}
  {/* <Homework_07 /> */}
 <Layout >
  <Routes>
    <Route path="/" element= {<Home/>}></Route>
     <Route path="/about" element= {<About/>}></Route>
      <Route path="/login" element= {<LogIn/>}></Route>
       {/* <Route path="/ContactUs" element= {<ContactUs/>}></Route> */}
        <Route path="*" element= "Page Not Found"></Route>
  </Routes>
 </Layout>
  {/* <Lesson_08 /> */}
  {/* <Homework_08 /> */}
  {/* <Lesson_09 /> */}
  {/* <Homework_09 /> */}
  {/* <Lesson_10 /> */}
  {/* <Homework_10 /> */}
  {/* <Homework_11/> */}
  {/* <Test/> */}
  {/* <Lesson_12 /> */}
  </BrowserRouter>
  );
}
export default App;

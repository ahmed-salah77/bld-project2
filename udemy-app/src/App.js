import { React, createContext, useState, useEffect  } from "react";
import Home from "./components/home/home";
import CoursePage from "./components/coursePage/coursePage";
import { Routes, Route } from "react-router-dom";
export const CourseData = createContext([]);

function App() {
  const [searchText, setSearchText] = useState("python");
  const [courseId, setCourseId] = useState(1307308);
  const [courses,setCourses] = useState();
  const [singleCourse,setSingleCourse] = useState();
  const [courseContent,setCourseContent] = useState();
  useEffect(() => {
      let uri = 'https://www.udemy.com/api-2.0/courses/?search='+ searchText + '&fields[course]=@all&fields[user]=@all&page_size=5';
      let h= new Headers();
      h.append("Accept","application/json, text/plain, */*");
      h.append("Authorization","Basic WnR6QXBCZHpaNjE4V3RRc2ZsTzltMTAwa0kxZkxYU3VSN3NFNTB5azpvakRXYjZrOGdPNGZJdGZrTGR0ZTNKM0dZVEI2TTNNcFprN2tTbzgyT016d3QwMnVQbHd0OXVCb0hwd0NWS2RBRG4zRWFQeXl2YlVaOW1EcmxRaGh1dE5XcEF2WkZuYXgzd3I0R3NDVGo3c0hERmtTVUtITDhEWksxS2tZRUNPTw==");
      h.append("Content-Type", "application/json;charset=utf-8");
      let req = new Request(uri,{
          method:'GET',
          headers:h,
      });
      fetch(req) 
      .then(Response => Response.json())
      .then(_courses => {
          setCourses(_courses.results);
      });       },
  [searchText])
  useEffect(() => {
    let uri = 'https://www.udemy.com/api-2.0/courses/'+ courseId + '/?fields[course]=@all&fields[user]=@all';
    let h= new Headers();
    h.append("Accept","application/json, text/plain, */*");
    h.append("Authorization","Basic WnR6QXBCZHpaNjE4V3RRc2ZsTzltMTAwa0kxZkxYU3VSN3NFNTB5azpvakRXYjZrOGdPNGZJdGZrTGR0ZTNKM0dZVEI2TTNNcFprN2tTbzgyT016d3QwMnVQbHd0OXVCb0hwd0NWS2RBRG4zRWFQeXl2YlVaOW1EcmxRaGh1dE5XcEF2WkZuYXgzd3I0R3NDVGo3c0hERmtTVUtITDhEWksxS2tZRUNPTw==");
    h.append("Content-Type", "application/json;charset=utf-8");
    let req = new Request(uri,{
        method:'GET',
        headers:h,
    });
    fetch(req) 
    .then(Response => Response.json())
    .then(_courses => {
        setSingleCourse(_courses);
    });       },
[courseId])
useEffect(() => {
  let uri = 'https://www.udemy.com/api-2.0/courses/'+ courseId + '/public-curriculum-items/?fields[chapter]=@all&fields[lecture]=@all';
  let h= new Headers();
  h.append("Accept","application/json, text/plain, */*");
  h.append("Authorization","Basic WnR6QXBCZHpaNjE4V3RRc2ZsTzltMTAwa0kxZkxYU3VSN3NFNTB5azpvakRXYjZrOGdPNGZJdGZrTGR0ZTNKM0dZVEI2TTNNcFprN2tTbzgyT016d3QwMnVQbHd0OXVCb0hwd0NWS2RBRG4zRWFQeXl2YlVaOW1EcmxRaGh1dE5XcEF2WkZuYXgzd3I0R3NDVGo3c0hERmtTVUtITDhEWksxS2tZRUNPTw==");
  h.append("Content-Type", "application/json;charset=utf-8");
  let req = new Request(uri,{
      method:'GET',
      headers:h,
  });
  fetch(req) 
  .then(Response => Response.json())
  .then(_courses => {
      setCourseContent(_courses);
      console.log(courseContent);
  });       },
[courseId])
  return (  
    <CourseData.Provider value={{courses,setSearchText,singleCourse,setCourseId}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </CourseData.Provider>
  );
}
export default App;

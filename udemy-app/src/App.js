import { React, createContext, useState, useEffect } from "react";
import Home from "./components/home/home";
import CoursePage from "./components/coursePage/coursePage";
import { Routes, Route } from "react-router-dom";
export const CourseData = createContext([]);

function App() {
  const [searchText, setSearchText] = useState("python");
  const [courseId, setCourseId] = useState(1307308);
  const [courses, setCourses] = useState();
  const [singleCourse, setSingleCourse] = useState();
  const [courseContent, setCourseContent] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);
  const [loading3, setLoading3] = useState(false);
  const [error3, setError3] = useState(null);
  useEffect(() => {
    setLoading(true);
    let uri =
      "https://www.udemy.com/api-2.0/courses/?search=" +
      searchText +
      "&fields[course]=@all&fields[user]=@all&page_size=5";
    let h = new Headers();
    h.append("Accept", "application/json, text/plain, */*");
    h.append(
      "Authorization",
      "Basic WnR6QXBCZHpaNjE4V3RRc2ZsTzltMTAwa0kxZkxYU3VSN3NFNTB5azpvakRXYjZrOGdPNGZJdGZrTGR0ZTNKM0dZVEI2TTNNcFprN2tTbzgyT016d3QwMnVQbHd0OXVCb0hwd0NWS2RBRG4zRWFQeXl2YlVaOW1EcmxRaGh1dE5XcEF2WkZuYXgzd3I0R3NDVGo3c0hERmtTVUtITDhEWksxS2tZRUNPTw=="
    );
    h.append("Content-Type", "application/json;charset=utf-8");
    let req = new Request(uri, {
      method: "GET",
      headers: h,
    });
    fetch(req)
      .then((Response) => Response.json())
      .then((_courses) => {
        setCourses(_courses.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchText]);
  useEffect(() => {
    setLoading2(true);
    let uri =
      "https://www.udemy.com/api-2.0/courses/" +
      courseId +
      "/?fields[course]=@all&fields[user]=@all";
    let h = new Headers();
    h.append("Accept", "application/json, text/plain, */*");
    h.append(
      "Authorization",
      "Basic WnR6QXBCZHpaNjE4V3RRc2ZsTzltMTAwa0kxZkxYU3VSN3NFNTB5azpvakRXYjZrOGdPNGZJdGZrTGR0ZTNKM0dZVEI2TTNNcFprN2tTbzgyT016d3QwMnVQbHd0OXVCb0hwd0NWS2RBRG4zRWFQeXl2YlVaOW1EcmxRaGh1dE5XcEF2WkZuYXgzd3I0R3NDVGo3c0hERmtTVUtITDhEWksxS2tZRUNPTw=="
    );
    h.append("Content-Type", "application/json;charset=utf-8");
    let req = new Request(uri, {
      method: "GET",
      headers: h,
    });
    fetch(req)
      .then((Response) => Response.json())
      .then((_courses) => {
        setSingleCourse(_courses);
      })
      .catch((err) => {
        setError2(err);
      })
      .finally(() => {
        setLoading2(false);
      });;
  }, [courseId]);
  useEffect(() => {
    setLoading3(true);
    let uri =
      "https://www.udemy.com/api-2.0/courses/" +
      courseId +
      "/public-curriculum-items/?fields[chapter]=@all&fields[lecture]=@all&fields[quiz]=@all&fields[practice]=@all&page_size=500";
    let h = new Headers();
    h.append("Accept", "application/json, text/plain, */*");
    h.append(
      "Authorization",
      "Basic WnR6QXBCZHpaNjE4V3RRc2ZsTzltMTAwa0kxZkxYU3VSN3NFNTB5azpvakRXYjZrOGdPNGZJdGZrTGR0ZTNKM0dZVEI2TTNNcFprN2tTbzgyT016d3QwMnVQbHd0OXVCb0hwd0NWS2RBRG4zRWFQeXl2YlVaOW1EcmxRaGh1dE5XcEF2WkZuYXgzd3I0R3NDVGo3c0hERmtTVUtITDhEWksxS2tZRUNPTw=="
    );
    h.append("Content-Type", "application/json;charset=utf-8");
    let req = new Request(uri, {
      method: "GET",
      headers: h,
    });
    fetch(req)
      .then((Response) => Response.json())
      .then((_courses) => {
        setCourseContent(_courses.results);
      })
      .catch((err) => {
        setError3(err);
      })
      .finally(() => {
        setLoading3(false);
      });;
  }, [courseId]);
  // if(loading || loading2 || loading3 || !singleCourse || !courseContent)
  //   return<h1>Loading...</h1>
  return (
    <CourseData.Provider
      value={{ courses,setCourses, setSearchText, singleCourse, setCourseId,courseContent }}
    >
      <Routes>
        <Route path="/" element={<Home setCourseId={setCourseId} />} />
        <Route path="/course" element={<CoursePage courseId={courseId} />} />
      </Routes>
    </CourseData.Provider>
  );
}
export default App;

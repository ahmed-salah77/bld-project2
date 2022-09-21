import {useState,useEffect} from 'react';
const SingleCourseFetching = (info) => {
    const [course,setCourse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        let uri = 'https://www.udemy.com/api-2.0/courses/'+ info + '/?fields[course]=@all&fields[user]=@all';
        setLoading(true);
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
        .then(_course => {
            setCourse(_course);
            console.log(_course);
        })
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false);
        })

    }, [info]);
    if(loading)
        return SingleCourseFetching(info);
    console.log('from single')
    console.log(course);
    return (
        {course,loading,error}
    );
}

export default SingleCourseFetching;

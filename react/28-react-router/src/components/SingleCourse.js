import React, {useEffect} from 'react';
import {Link,  useNavigate, useParams} from "react-router-dom";
import courses from "../data/courses";


const SingleCourse = () => {
    const params = useParams()
    const navigate = useNavigate()
   /* const location = useLocation();
    console.log(location)*/
    const course = courses.find((course)=> course.slug === params.slug)

/*    if(!course){
        return(
            <>
                <NotFound/>
                <Link className="courseLink"  to='..' relative='path'>All Courses</Link>
            </>
        )
    }*/


    useEffect(() => {
        if(!course){
            navigate('..', {relative : 'path'})
        }
    }, [course, navigate]);
    return (
        <>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h3>{course?.id}</h3>
            <Link className="courseLink"  to='..' relative='path'>All Courses</Link>
        </>
    );
};

export default SingleCourse;

import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DataCard from '../components/DataCard';

const Lesson = () => {
    const obj = useParams()
    // console.log(obj)
    
    const data = useLoaderData()
    // console.log(data)

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <h2 className="text-center font-bold text-3xl text-blue-600 my-8">Lesson-{obj.lesson_no}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-5 w-10/12 mx-auto mb-10'>
                {
                    data.map((d,idx)=> <DataCard key={idx} d={d}></DataCard>)
                }
            </div>
            <button className='btn bg-blue-400 mx-auto block mb-4'><NavLink to="/startLearning">Back To Lesson</NavLink></button>
            <Footer></Footer>
        </div>
    );
};

export default Lesson;
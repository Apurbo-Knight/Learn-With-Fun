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
            <h2 className="pt-20 text-center font-bold text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent my-8">Lesson-{obj.lesson_no}</h2>
            <h2 className=' mx-auto text-center font-semibold text-2xl bg-gradient-to-r from-purple-500 pb-3 to-blue-500 bg-clip-text text-transparent mb-5'>Clicking On Each Word, You Can Hear the Pronunciation of the word</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-screen-2xl px-10 gap-5 mx-auto mb-10'>
                {
                    data.map((d,idx)=> <DataCard key={idx} d={d}></DataCard>)
                }
            </div>
            <button className='btn hover:bg-pink-500 rounded-2xl bg-pink-400 mx-auto block mb-4 text-white shadow-lg hover:-translate-y-1 transition-transform duration-300'><NavLink to="/startLearning">Back To Lesson</NavLink></button>
            <Footer></Footer>
        </div>
    );
};

export default Lesson;
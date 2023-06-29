import { Typewriter } from 'react-simple-typewriter';
import myImg from '../../assets/sourov10mb-removebg.png';
import "@lottiefiles/lottie-player";
import React, { useRef } from 'react';
import Projects from '../Projects/Projects';

const Main = () => {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div className="font-one">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="my-drawer-2" className="btn drawer-button bg-blue-300  fixed lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <div className='px-4'>
                        <div id="home" className='lg:flex lg:justify-center lg:items-center lg:gap-80 mt-20'>
                            <div className=' lg:ml-16 mb-4'>
                                <h2 className="md:text-7xl text-3xl font-semibold leading-[60px]">Hello, This is <br />Mohit Hossen Sourov</h2>
                                <h3 className="md:text-5xl text-2xl font-bold mt-6">I am a <span className='font-extrabold'>
                                    <Typewriter
                                        words={['Web Developer', 'MERN Stack Developer', 'Frontend Developer', 'Backend Developer']}
                                        loop={100000}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span></h3>
                            </div>
                            <div className=''>
                                <div className='lg:w-[450px] w-[90%] lg:h-[450px] bg-[#134985] rounded-full '>
                                    <img className='lg:h-[450px] rounded-full' src={myImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="about">
                            <div className='text-center mt-40'>
                                <h2 className='text-4xl font-section text-blue-300 inline px-8 pb-4 rounded-lg border-blue-400 border-b-4'>About Me</h2>
                                <p className='md:text-5xl text-3xl font-bold mt-12 '>A Passionate Developer <br /> Who Loves to Code</p>
                            </div>
                            <div className='lg:w-[1200px] mx-auto lg:flex lg:gap-28 lg:items-center mt-16'>
                                <div className='lg:w-[50%] text-center'>
                                    <p className=' text-xl font-medium lg:text-justify text-left'>
                                        Hi There, I'm a passionate web developer with a keen eye for detail, and a drive to create elegant, efficient, and user-friendly web app. With over 1+ years of experience in web development, I've honed my skills in a variety of technologies, including ReactJs, Nodejs, ExpressJs, Firebase, Javascript, es6+ and MongoDB.
                                    </p>
                                    <div className='border rounded-xl mt-6 inline-block p-10 text-left'>
                                        <div className='md:flex'>
                                            <div className='md:border-r-[1px] md:pr-10'>
                                                <h4 className='text-xl mb-2 font-semibold'>Name</h4>
                                                <p className='text-lg mb-4'>Mohit Hossen Sourov</p>
                                                <h4 className='text-xl mb-2 font-semibold'>Email</h4>
                                                <p className='text-lg mb-4'>mhsourov621@gmail.com</p>
                                                <h4 className='text-xl mb-2 font-semibold'>Phone</h4>
                                                <p className='text-lg mb-4'>+8801872218623</p>
                                            </div>
                                            <div className='md:ml-10'>
                                                <h4 className='text-xl mb-2 font-semibold'>Address</h4>
                                                <p className='text-lg mb-4'>Dhaka, Bangladesh</p>
                                                <h4 className='text-xl mb-2 font-semibold'>Degree</h4>
                                                <p className='text-lg mb-4'>Current Student</p>
                                                <h4 className='text-xl mb-2 font-semibold'>Freelance</h4>
                                                <p className='text-lg'>Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <a href="/resume/resume.pdf" download="MH_Sourov-resume.pdf">
                                            <button className='px-6 py-4 rounded-full bg-info hover:bg-white duration-700 hover:text-blue-600 text-white text-xl font-bold'>Download Resume</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='md:w-[600px] w-[350px] overflow-hidden'>
                                    <lottie-player
                                        id="firstLottie"
                                        ref={ref}
                                        autoplay
                                        loop
                                        mode="normal"
                                        src="https://assets6.lottiefiles.com/packages/lf20_vnikrcia.json"
                                        style={{ width: "500px", height: "500px" }}
                                    ></lottie-player>
                                </div>
                            </div>
                        </div>

                        <div id="skills">
                            <div className='text-center mt-40 '>
                                <h2 className='text-4xl font-section text-blue-300 inline px-8 pb-4 rounded-lg border-blue-400 border-b-4'>Skills</h2>
                                <p className='md:text-5xl text-3xl font-bold mt-12 '>I Work Hard to Improve <br /> My Skills Regularly</p>
                            </div>
                            <div className='lg:w-[1200px] mx-auto mt-16'>
                                <div className='md:flex justify-between'>
                                    <div className='md:w-[45%] w-[95%]'>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p className='text-lg font-extrabold'>HTML</p>
                                                <p className='text-lg font-extrabold text-info'>95%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="95" max="100"></progress>
                                            </div>
                                        </div>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p className='text-lg font-extrabold'>CSS</p>
                                                <p className='text-lg font-extrabold text-info'>80%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="80" max="100"></progress>
                                            </div>
                                        </div>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p className='text-lg font-extrabold'>CSS Framework</p>
                                                <p className='text-lg font-extrabold text-info'>80%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="80" max="100"></progress>
                                            </div>
                                        </div>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p className='text-lg font-extrabold'>Javascript</p>
                                                <p className='text-lg font-extrabold text-info'>70%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="70" max="100"></progress>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:w-[45%] w-[95%]'>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p>React JS</p>
                                                <p>80%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="80" max="100"></progress>
                                            </div>
                                        </div>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p>Node JS</p>
                                                <p>75%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="75" max="100"></progress>
                                            </div>
                                        </div>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p>Express JS</p>
                                                <p>80%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="80" max="100"></progress>
                                            </div>
                                        </div>
                                        <div className='mb-12'>
                                            <div className='flex justify-between'>
                                                <p>MongoDB</p>
                                                <p>85%</p>
                                            </div>
                                            <div>
                                                <progress className="progress progress-info bg-white w-full" value="85" max="100"></progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id='projects'>
                            <div className='text-center mt-40 '>
                                <h2 className='text-4xl font-section text-blue-300 inline px-8 pb-4 rounded-lg border-blue-400 border-b-4'>Portfolio</h2>
                                <p className='md:text-5xl text-3xl font-bold mt-12 '>What I Do for My Clients</p>
                            </div>
                            <div className='lg:w-[1200px] mx-auto mt-16'>
                                <Projects></Projects>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 text-xl h-full bg-blue-300">
                        {/* Sidebar content here */}
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact Me</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Main;
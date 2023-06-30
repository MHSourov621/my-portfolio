import { Typewriter } from 'react-simple-typewriter';
import myImg from '../../assets/sourov10mb-removebg.png';
import "@lottiefiles/lottie-player";
import React, { useRef } from 'react';
import Projects from '../Projects/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faCode, faLaptopCode, faLink, faDownload, faEnvelope, faPen, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    const notify = () => toast("Send message successfully");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tl4w9yr', 'template_jznn4gv', form.current, 'kYMSQ-9perrluLBP-')
            .then((result) => {
                console.log(result.text);
                notify();
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
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
                            <div data-aos="fade-up-right" className=' lg:ml-16 mb-4'>
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
                            <div data-aos="fade-up-left" className=''>
                                <div className='lg:w-[450px] w-[90%] lg:h-[450px] bg-[#134985] rounded-full '>
                                    <img className='lg:h-[450px] rounded-full' src={myImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="about">
                            <div data-aos="fade-up" className='text-center mt-40'>
                                <h2 className='text-4xl font-section text-blue-300 inline px-8 pb-4 rounded-lg border-blue-400 border-b-4'>About Me</h2>
                                <p className='md:text-5xl text-3xl font-bold mt-12 '>A Passionate Developer <br /> Who Loves to Code</p>
                            </div>
                            <div className='lg:w-[1200px] mx-auto lg:flex lg:gap-28 lg:items-center mt-16'>
                                <div data-aos="zoom-in" className='lg:w-[50%] text-center'>
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
                                            <button className='px-6 py-4 rounded-full bg-info hover:bg-white duration-700 hover:text-blue-600 text-white text-xl font-bold'>Download Resume <FontAwesomeIcon icon={faDownload} /></button>
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="zoom-in-up" className='md:w-[600px] w-[350px] overflow-hidden'>
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
                            <div data-aos="fade-up" className='text-center mt-40 '>
                                <h2 className='text-4xl font-section text-blue-300 inline px-8 pb-4 rounded-lg border-blue-400 border-b-4'>Skills</h2>
                                <p className='md:text-5xl text-3xl font-bold mt-12 '>I Work Hard to Improve <br /> My Skills Regularly</p>
                            </div>
                            <div className='lg:w-[1200px] mx-auto mt-16'>
                                <div className='md:flex justify-between'>
                                    <div data-aos="fade-right" className='md:w-[45%] w-[95%]'>
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
                                    <div data-aos="fade-left" className='md:w-[45%] w-[95%]'>
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
                            <div data-aos="fade-up" className='text-center mt-40 '>
                                <h2 className='text-4xl font-section text-blue-300 inline px-8 pb-4 rounded-lg border-blue-400 border-b-4'>Portfolio</h2>
                                <p className='md:text-5xl text-3xl font-bold mt-12 '>What I Do for My Clients</p>
                            </div>
                            <div data-aos="flip-left" className='lg:w-[1200px] mx-auto mt-16'>
                                <Projects></Projects>
                            </div>
                        </div>

                        <div id="contact">
                            <div data-aos="fade-up" className='text-center mt-40 '>
                                <h2 className='text-4xl font-section text-blue-300 inline px-8 pb-4 rounded-lg border-blue-400 border-b-4'>Contact Me</h2>
                                <p className='md:text-5xl text-3xl font-bold mt-12 '>I Want to Hear from You</p>
                            </div>
                            <div className='lg:w-[1200px] mx-auto mt-16'>
                                <div className='md:flex'>
                                    <div data-aos="fade-up-right" className='md:w-[600px] w-[350px] overflow-hidden flex justify-center items-center'>
                                        <lottie-player
                                            id="firstLottie"
                                            ref={ref}
                                            autoplay
                                            loop
                                            mode="normal"
                                            src="https://assets7.lottiefiles.com/packages/lf20_sxk2ofvv.json"
                                            style={{ width: "500px", height: "500px" }}
                                        ></lottie-player>
                                    </div>
                                    <div data-aos="fade-up-left">
                                        <form ref={form} onSubmit={sendEmail} className='md:w-[600px]'>
                                            <div className='mb-10 relative'>
                                                <input type="text" placeholder="Name" name="name" className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20" />
                                                <FontAwesomeIcon className='absolute top-7 text-blue-300 text-2xl right-4' icon={faUser} />
                                            </div>
                                            <div className='mb-10 relative'>
                                                <input type="text" placeholder="Email" name="email" className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20" />
                                                <FontAwesomeIcon className='absolute top-7 text-blue-300 text-2xl right-4' icon={faEnvelope} />
                                            </div>
                                            <div className='mb-10 relative'>
                                                <input type="text" placeholder="Phone" name="phone" className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20" />
                                                <FontAwesomeIcon className='absolute top-7 text-blue-300 text-2xl right-4' icon={faPhone} />
                                            </div>
                                            <div className='mb-10 relative'>
                                                <input type="text" placeholder="Subject" name="subject" className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20" />
                                                <FontAwesomeIcon className='absolute top-7 text-blue-300 text-2xl right-4' icon={faPen} />
                                            </div>
                                            <div className='mb-10 relative'>
                                                <input type="text" placeholder="Message" name="message" className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-40" />
                                                <FontAwesomeIcon className='absolute top-16 text-blue-300 text-2xl right-4' icon={faMessage} />
                                            </div>
                                            <div className='text-center'>
                                                <input className='px-6 py-4 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 duration-700 text-white text-xl font-bold' type="submit" value="Send" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="footer" className='mt-40'>
                            <footer className="footer p-10 bg-blue-900 text-neutral-content">
                                <div>
                                    <h2 className='text-3xl font-section'>Mohit Hossen Sourov</h2>
                                    <p className='text-lg'>Copyright © 2023 - All right reserved by Mohit Hossen Sourov</p>
                                </div>
                                <div>
                                    <span className="footer-title">Social</span>
                                    <div className="grid grid-flow-col gap-4 text-3xl">
                                        <a href="https://www.facebook.com/mh.sourov.621" target="_blank"><FaFacebook></FaFacebook></a>
                                        <a href="https://www.linkedin.com/in/mohit-hossen-sourov/" target="_blank"><FaLinkedin></FaLinkedin></a>
                                        <a href="https://github.com/MHSourov621" target="_blank"><FaGithub></FaGithub></a>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className='h-full flex items-center bg-opacity-30 bg-blue-300'>
                        <ul className="menu p-4 text-xl">
                            <h2 className='text-3xl font-section p-4 text-blue-300'>MH Sourov</h2>
                            {/* Sidebar content here */}
                            <li className='hover:bg-blue-300 rounded-lg mb-4 mt-8'><Link to="home" spy={false} smooth={true} offset={-100} duration={500}><FontAwesomeIcon className='mr-2' icon={faHouse} />Home</Link></li>
                            <li className='hover:bg-blue-300 rounded-lg mb-4'><Link to="about" spy={false} smooth={true} offset={-100} duration={500}><FontAwesomeIcon className='mr-2' icon={faUser} />About</Link></li>
                            <li className='hover:bg-blue-300 rounded-lg mb-4'><Link to="skills" spy={false} smooth={true} offset={-100} duration={500}><FontAwesomeIcon className='mr-2' icon={faCode} />Skills</Link></li>
                            <li className='hover:bg-blue-300 rounded-lg mb-4'><Link to="projects" spy={false} smooth={true} offset={-100} duration={500}><FontAwesomeIcon className='mr-2' icon={faLaptopCode} />Projects</Link></li>
                            <li className='hover:bg-blue-300 rounded-lg mb-4'><Link to="contact" spy={false} smooth={true} offset={-100} duration={500}><FontAwesomeIcon className='mr-2' icon={faLink} />Contact Me</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;
import { useEffect, useState } from "react";
import Project from "./Project";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,  } from '@fortawesome/free-solid-svg-icons'
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [modal, setModal] = useState();
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const handleModal = (id) => {
        console.log(id);
        window.my_modal_3.showModal();
        const found = projects.find(project => project.id === id);
        setModal(found);
        console.log(modal);
    }
    return (
        <div className="lg:grid lg:grid-cols-3 lg:justify-between">
            {
                projects.map(project => <Project key={project.id} handleModal={handleModal} project={project}></Project>)
            }
            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box p-8">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-3xl">Project : <span className="text-blue-700 font-serif font-bold">{modal?.name}</span></h3>
                    <p className="text-xl py-4">Technology: <span  className="text-blue-700 font-extrabold">{modal?.technology}</span></p>
                    <ul className="list-decimal text-lg">
                        <li className="mb-4">{modal?.details[0]}</li>
                        <li className="mb-4">{modal?.details[1]}</li>
                        <li className="mb-4">{modal?.details[2]}</li>
                    </ul>
                    <div className="md:flex justify-between mt-6">
                        <div className="mb-4">
                            <a className="text-xl font-extrabold text-blue-700" href={modal?.live} target="_blank">Preview <FontAwesomeIcon icon={faEye} /></a>
                        </div>
                        <div>
                            <a className="text-xl font-extrabold text-blue-700 mr-4" href={modal?.client} target="_blank"> <FaGithub className="inline-block mr-2"></FaGithub>Client Site </a>
                            <a className="text-xl font-extrabold text-blue-700" href={modal?.server} target="_blank"><FaGithub className="inline-block mr-2"></FaGithub>Server Site </a>
                        </div>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default Projects;
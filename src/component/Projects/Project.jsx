import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Project = ({ project, handleModal }) => {
    const { id, name, image, live, client, server, details } = project;
    return (
        <div>
            <div className="w-[350px]">
                <div className="project-image rounded-lg">
                    <img src={image} alt="" />
                </div>
                <div className="flex justify-between items-center py-6 px-4 border border-t-0 border-gray-600 rounded-lg">
                    <a className="text-xl font-extrabold text-info" href={live} target="_blank">Preview <FontAwesomeIcon icon={faEye} /></a>
                    <button onClick={() => handleModal(id)} className="btn btn-info hover:bg-white duration-500 hover:text-black">Details</button>
                </div>
            </div>
        </div>
        
    );
};

export default Project;
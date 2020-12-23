import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRecoilState } from "recoil"
import { userState } from "../../atoms/auth"
import { projectInFocusState } from "../../atoms/todo"
import Modal from "./modal"
import { useForm } from 'react-hook-form'
import app from "../../auth/base"

const SideMenu = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [user] = useRecoilState(userState)
    const [projects, setProjects] = useState(null);
    const [hidden, setHidden] = useState(true)
    const [projectInFocus, setProjectInFocus] = useRecoilState(projectInFocusState)
    const [projectTitle, setProjectTitle] = useState("")

    const createNewProject = async (data) => {
        await axios
            .post(`http://localhost:4000/projects/`, {
                title: data.projectTitle,
                user_id:await app.auth().currentUser.getIdTokenResult(),
            })
            .catch((err) => console.log(err));
        setHidden(true)
    }

    useEffect(() => {
        //get every project which is related to the user
        axios({
            method: 'get',
            url: `http://localhost:4000/user/${user.uid}`,
        })
            .then(res => setProjects(res.data.projects))
            .catch(err => console.log(err.message))

    }, [user.uid]);

    return (
        <div className='bg-gray-200 w-60'>
            <div className='flex flex-col items-center pt-8 space-y-4 '>
                {/* Projects */}
                <div>
                    <div className="flex flex-col justify-between">
                        <div className="flex">
                            <p className="text-black pb-3 font-bold "> Projects </p>
                            <div className="cursor-pointer" onClick={() => setHidden(!hidden)}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                            </div>

                        </div>

                        {!hidden ? (
                            <div className="flex" hidden={hidden}>
                                <form onSubmit={handleSubmit(createNewProject)}>
                                    <input type="txt"
                                        name="projectTitle"
                                        id="projectTitle"
                                        ref={register}

                                    />
                                    <button type='onSubmit'>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </button>

                                </form>

                                <div className="cursor-pointer">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </div>

                            </div>
                        ) : null}

                        {/* </Modal> */}
                    </div>
                    {projects && projects.map(p => (
                        <div className="border-black cursor-pointer pb-2" key={p.id} onClick={() => setProjectInFocus(p)}>
                            <p className="text-black"> {p.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SideMenu;

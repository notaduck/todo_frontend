import { useEffect } from 'react'
import axios from 'axios'
import { useRecoilState } from "recoil"
import { userState } from "../../atoms/auth"

const SideBar = () => {

    const [user] = useRecoilState(userState)

    // let getProjectList = async () => {

    //     return await axios({
    //       method: 'get',
    //       url: `http://localhost:4000/projects/${user.uid}`,
    //     })
    //     .then(res => console.log('Response:', res))
    //     .catch(err => alert(err.message))

    // }
    // getProjectList()

    useEffect(() => {
        console.log(user)
    }, [user]);

    return (
        <div className="w-20 bg-gray-600">

            <div className='flex flex-col justify-between items-center p-8 space-y-4 '>

                <div className='flex flex-col items-center justify-start cursor-pointer'>
                    <svg className="w-6 h-6 fill-current text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    <p className='text-gray-100'> Projects</p>
                </div>

                <div className='flex flex-col items-center justify-start cursor-pointer'>
                    <svg className="w-6 h-6 fill-current text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    <p className='text-gray-100'> Projects</p>
                </div>

                <div className='flex flex-col items-center justify-start cursor-pointer'>
                    <svg className="w-6 h-6 fill-current text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    <p className='text-gray-100'> Projects</p>
                </div>

            </div>
        </div>
    )
}

export default SideBar

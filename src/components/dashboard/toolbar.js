import Axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/auth";
import app from "../../auth/base";

const Toolbar = () => {

    return(
            <div className="flex justify-end items-center h-10  bg-gray-100 border border-opacity-75">
            <div className='rounded-xl'>
                <button className="block bg-red-400 hover:text-green text-white rounded" onClick={() => app.auth().signOut()}>
                   <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                </button>
            </div>
            </div>
    )
}

export default Toolbar;


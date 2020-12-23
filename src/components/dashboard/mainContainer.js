import { projectInFocusState } from "../../atoms/todo";
import { useRecoilState } from 'recoil'

const MainContainer = () => {

    const [projectInFocus] = useRecoilState(projectInFocusState);

    return (

        <div className="flex flex-1 bg-gray-100">
        {projectInFocus && projectInFocus.title}

        </div>
    )
}

export default MainContainer;

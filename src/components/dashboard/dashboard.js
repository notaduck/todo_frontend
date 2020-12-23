import MainContainer from "./mainContainer";
import SideBar from "./Sidebar";
import SideMenu from "./sideMenu";
import Toolbar from "./toolbar";


const Dashboard = () => {

    return (
            <div className='w-screen'>
                <Toolbar/>
            <div className="flex h-screen">
            {/* <SideBar/> */}
            <SideMenu/>
            <MainContainer/>
            </div>

        </div>
    )
}

export default Dashboard;

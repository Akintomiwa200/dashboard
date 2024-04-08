import { Outlet } from "react-router-dom"
import SideBar from "../components/navigations/sidebar/SideBar"
import './dashboard.css'

const DashboardLayout = () => {
  return (
    <div id="layout">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout
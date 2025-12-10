import Layout from "./Layout.jsx";

import Dashboard from "./Dashboard";

import Jobs from "./Jobs";

import CheckIn from "./CheckIn";

import Team from "./Team";

import Schedule from "./Schedule";

import Customers from "./Customers";

import PriceList from "./PriceList";

import UserProfile from "./UserProfile";

import Archive from "./Archive";

import Organisations from "./Organisations";

import Projects from "./Projects";

import Photos from "./Photos";

import Reports from "./Reports";

import Inbox from "./Inbox";

import Tasks from "./Tasks";

import RoleSettings from "./RoleSettings";

import Notifications from "./Notifications";

import Logistics from "./Logistics";

import Contracts from "./Contracts";

import MyVehicle from "./MyVehicle";

import Fleet from "./Fleet";

import ToolsAdmin from "./ToolsAdmin";

import Suppliers from "./Suppliers";

import EmailSettings from "./EmailSettings";

import PartsHardwareAdmin from "./PartsHardwareAdmin";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Dashboard: Dashboard,
    
    Jobs: Jobs,
    
    CheckIn: CheckIn,
    
    Team: Team,
    
    Schedule: Schedule,
    
    Customers: Customers,
    
    PriceList: PriceList,
    
    UserProfile: UserProfile,
    
    Archive: Archive,
    
    Organisations: Organisations,
    
    Projects: Projects,
    
    Photos: Photos,
    
    Reports: Reports,
    
    Inbox: Inbox,
    
    Tasks: Tasks,
    
    RoleSettings: RoleSettings,
    
    Notifications: Notifications,
    
    Logistics: Logistics,
    
    Contracts: Contracts,
    
    MyVehicle: MyVehicle,
    
    Fleet: Fleet,
    
    ToolsAdmin: ToolsAdmin,
    
    Suppliers: Suppliers,
    
    EmailSettings: EmailSettings,
    
    PartsHardwareAdmin: PartsHardwareAdmin,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Dashboard />} />
                
                
                <Route path="/Dashboard" element={<Dashboard />} />
                
                <Route path="/Jobs" element={<Jobs />} />
                
                <Route path="/CheckIn" element={<CheckIn />} />
                
                <Route path="/Team" element={<Team />} />
                
                <Route path="/Schedule" element={<Schedule />} />
                
                <Route path="/Customers" element={<Customers />} />
                
                <Route path="/PriceList" element={<PriceList />} />
                
                <Route path="/UserProfile" element={<UserProfile />} />
                
                <Route path="/Archive" element={<Archive />} />
                
                <Route path="/Organisations" element={<Organisations />} />
                
                <Route path="/Projects" element={<Projects />} />
                
                <Route path="/Photos" element={<Photos />} />
                
                <Route path="/Reports" element={<Reports />} />
                
                <Route path="/Inbox" element={<Inbox />} />
                
                <Route path="/Tasks" element={<Tasks />} />
                
                <Route path="/RoleSettings" element={<RoleSettings />} />
                
                <Route path="/Notifications" element={<Notifications />} />
                
                <Route path="/Logistics" element={<Logistics />} />
                
                <Route path="/Contracts" element={<Contracts />} />
                
                <Route path="/MyVehicle" element={<MyVehicle />} />
                
                <Route path="/Fleet" element={<Fleet />} />
                
                <Route path="/ToolsAdmin" element={<ToolsAdmin />} />
                
                <Route path="/Suppliers" element={<Suppliers />} />
                
                <Route path="/EmailSettings" element={<EmailSettings />} />
                
                <Route path="/PartsHardwareAdmin" element={<PartsHardwareAdmin />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
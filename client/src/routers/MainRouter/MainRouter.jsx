import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/component/Login";
import DoctorRegistration from "../../pages/Registration/components/DoctorRegistration";
import Registration from "../../pages/Registration/components/Registration";
import Services from "../../pages/Services/Services";
import Team from "../../pages/Team/Team";
import Tips from "../../pages/Tips/Tip/Tip";
import TipDetails from "../../pages/Tips/Tipdetails/Tipdetails";
import AboutUs from "../../pages/aboutUs/AboutUs";
import AddDoctor from "../../pages/dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/dashboard/AllUsers/AllUsers";
import Appointment from "../../pages/dashboard/Appointment/Appointment";

import Dashboard from "../../pages/dashboard/Dashboard";
import DoctorApproval from "../../pages/dashboard/DoctorApproval/DoctorApproval";
import DoctorApprovalDetails from "../../pages/dashboard/DoctorApproval/DoctorApprovalDetails";
import UserAppointment from "../../pages/dashboard/UserAppointment/UserAppointment";
import UserProfile from "../../pages/dashboard/UserProfile/UserProfile";
import VideoCall from "../../pages/dashboard/VideoCall/VideoCall";
import PaymentHistory from "../../pages/dashboard/paymentHistory/PaymentHistory";
import PostNewTip from "../../pages/dashboard/postNewTip/PostNewTip";
import Doctors from './../../pages/doctors/Doctors';
import useApiLink from "../../lib/hooks/useApiLink";
import DoctorProfile from "../../pages/dashboard/doctorProfile/DoctorProfile";
import Cart from "../../pages/Cart/Cart";
import PaymentSuccess from "../../pages/PaymentSuccess/PaymentSuccess";
import AdminRoute from "../AdminRoute";
import DoctorRoute from "../DoctorRoute";
import AllDoctor from "../../pages/dashboard/AllDoctor/AllDoctor";
import Connect from "../../pages/ChatApp/Chat/Connect";
import PrivetRoute from "../PrivetRoute";
import DoctorAppointment from "../../pages/dashboard/doctorAppointment/DoctorAppointment";

const apiLink = useApiLink()


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/appointment',
                element: <PrivetRoute><UserAppointment/></PrivetRoute>
            },
            {
                path: '/doctors',
                element: <Doctors />,
            },
            {
                path: "/tips",
                element: <Tips />
            },
            {
                path: "/tips/:id",
                element: <TipDetails />,
                // loader: ({ params }) => fetch(`tips.json/${params.id}`)
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: '/team',
                element: <Team />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: "cart",
                element: <PrivetRoute><Cart /></PrivetRoute>
            },
            {
                path:'payment/success/:tranId',
                element: <PrivetRoute><PaymentSuccess /></PrivetRoute>
            },
            {
                path: "/doctorRegister",
                element: <DoctorRegistration />
            },
            {
                path: "/login",
                element: <Login />
            },
            {

                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout /></PrivetRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "allUser",
                element:<AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: "addDoctor",
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: "userProfile",
                element: <PrivetRoute><UserProfile /></PrivetRoute>
            },
            {
                path: "doctorProfile",
                element: <DoctorRoute><DoctorProfile /></DoctorRoute>
            },
            {
                path: "appoinment",
                element: <PrivetRoute><Appointment/></PrivetRoute>
            },
            {
                path: "doctorApproval",
                element: <AdminRoute><DoctorApproval/></AdminRoute>
            },
            {
                path: "postNewTip",
                element: <DoctorRoute><PostNewTip /></DoctorRoute>
            },
            {
                path: "doctorDetail/:id",
                element: <AdminRoute><DoctorApprovalDetails/></AdminRoute>,
                loader: ({params}) => fetch(`${apiLink}/doctorRequestDetail/${params.id}`)
            },
            {

                path: "videocall",
                element: <VideoCall />
            },
            
            {

                path:'paymentHistory',
                element: <PrivetRoute><PaymentHistory /></PrivetRoute>
            },
            {

                path: "doctorApproval",
                element: <AdminRoute><DoctorApproval/></AdminRoute>
            },
            // {
            //     path: "doctorDetail/:id",
            //     element: <DoctorApprovalDetails/>,
            //     loader: ({params}) => fetch(`${apiLink}/doctorRequestDetail/${params.id}`)
            // },
            {
                path: "chat",
                element: <Connect></Connect>,
            },
            {
                path: "allDoctor",
                element:<AdminRoute><AllDoctor /></AdminRoute>
            },
            {
                path: "doctorAppointment",
                element: <DoctorRoute><DoctorAppointment /></DoctorRoute>
            },
        ]
    }
]);

export default MainRouter;

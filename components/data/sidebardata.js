import { GrProjects } from "react-icons/gr";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout } from "react-icons/si";

export const items = [
    {
        name: 'All Projects',
        path: '/projects',
        icon: <GrProjects />,
        dropdown: true,
        dropdownItems: [
            {
                name: 'Submenu',
                path: '/submenu'
            },
            {
                name: 'Submenu',
                path: '/submenu'
            }, 
            {
                name: 'Submenu',
                path: '/submenu'
            }, 
            {
                name: 'Submenu',
                path: '/submenu'
            } 
        ]
    },
    {
        name: 'Fasion Designs',
        path: '/projects',
        icon: <FaCheck />,
        dropdown: false,
    },
    {
        name: 'Gift Cards Items',
        path: '/projects',
        icon: <FaCheckDouble />,
        dropdown: true,
        dropdownItems: [
            {
                name: 'Submenu',
                path: '/submenu'
            },
            {
                name: 'Submenu',
                path: '/submenu'
            }, 
            {
                name: 'Submenu',
                path: '/submenu'
            }, 
            {
                name: 'Submenu',
                path: '/submenu'
            } 
        ]
    },
    {
        name: 'About Us',
        path: '/projects',
        icon: <SiHelpscout />,
        dropdown: false,
    },
    {
        name: 'Contact Us',
        path: '/projects',
        icon: <FiPhoneCall />,
        dropdown: false,
    }
]

"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link'

interface NavigationItem {
    // Define the structure of a navigation item as needed
    title: string;
    // Add more properties as needed
}

interface NavigationBarLanguagesClientComponentProps {
    item: NavigationItem;
    idx: number;
}

export default function NavigationBarLanguagesClientComponent({ item, idx }: { item: any, idx: any }) {



    const notify = () => toast("Internationalization hasn't been applied");

    return (
        <>
            <Link href={item.locale} locale={item.locale}>
                <ToastContainer />
                {item.title}
            </Link>
        </>

    )
}

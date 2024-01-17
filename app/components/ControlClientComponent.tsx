"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from "next/navigation";

import { useTranslations } from "next-intl";

interface NavigationItem {
    // Define the structure of a navigation item as needed
    title: string;
    // Add more properties as needed
}

interface NavigationBarLanguagesClientComponentProps {
    item: NavigationItem;
    idx: number;
}

// https://i-protocol-control?userId=usedId+reservationType=invitation+invitationStatus=invitationstatus

export default function ControlClientComponent() {

    //const userName = 'David';

    const searchParams = useSearchParams();

    const userId = searchParams.get('userId');
    const reservationType = searchParams.get('reservationType');
    const invitationStatus = searchParams.get('invitationStatus');


    const notify = () => toast("Internationalization hasn't been applied");

    const t = useTranslations()

    return (

        <div style={{ display: "contents" }}>
            <h1 style={{ display: "flex", fontSize: "2rem" }}>Control</h1>

            <h3 style={{ display: "flex", fontSize: "2rem" }}>{t("test")}</h3>

            {/* <h1>{t('header', { name: userName })}</h1> */}

            <div style={{ display: "flex" }}>

                {
                    invitationStatus == "validated" ? (<article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" style={{ width: "-webkit-fill-available", cursor: "pointer" }}>
                        <button onClick={notify}>
                            <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1700403656/acwu0phwcnrdlzdymwbv.jpg" loading="lazy" alt="Valid" className="w-full h-80 rounded-t-md" />
                            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                            </div>
                            <div className="pt-3 ml-4 mr-2 mb-3" style={{ textAlign: "left" }}>
                                <h3 className="text-xl text-gray-900">
                                    User Id: <p className="text-gray-400 text-sm mt-1">{userId}</p>
                                </h3>
                                <h3 className="text-xl text-gray-900">
                                    Reservation Type: <p className="text-gray-400 text-sm mt-1">{reservationType}</p>
                                </h3>
                                <h3 className="text-xl text-gray-900">
                                    Invitation Status: <p className="text-gray-400 text-sm mt-1">{invitationStatus}</p>
                                </h3>
                            </div>
                        </button>
                    </article>) : (<article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" style={{ width: "-webkit-fill-available", cursor: "pointer" }}>
                        <button onClick={notify}>
                            <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1700403608/xmcicut2mul3jewzc2x4.jpg" loading="lazy" alt="Not valid" className="w-full h-80 rounded-t-md" />
                            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                            </div>
                            <div className="pt-3 ml-4 mr-2 mb-3" style={{ textAlign: "left" }}>
                                <h3 className="text-xl text-gray-900" style={{ display: "flex" }}>
                                    User Id: <p className="text-gray-400 text-sm mt-1">{userId ? (<span style={{ marginLeft: "1rem" }}>{userId}</span>) : (<span style={{ display: "flex", marginLeft: "1rem" }}>Undefined</span>)}</p>
                                </h3>
                                <h3 className="text-xl text-gray-900" style={{ display: "flex" }}>
                                    Reservation Type: <p className="text-gray-400 text-sm mt-1">{reservationType ? (<span style={{ marginLeft: "1rem" }}>{reservationType}</span>) : (<span style={{ display: "flex", marginLeft: "1rem" }}>Undefined</span>)}</p>
                                </h3>
                                <h3 className="text-xl text-gray-900" style={{ display: "flex" }}>
                                    Invitation Status: <p className="text-gray-400 text-sm mt-1">{invitationStatus ? (<span style={{ marginLeft: "1rem" }}>{invitationStatus}</span>) : (<span style={{ display: "flex", marginLeft: "1rem" }}>Undefined</span>)}</p>
                                </h3>
                            </div>
                        </button>
                    </article>)
                }

            </div>
        </div>

    )
}

"use client"

import ProMdal from "./pro-modal";

import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [mounted])
    
    if (!mounted) return null;

    return (
        <>
            <ProMdal/>
        </>
    )

}

 
export default ModalProvider;
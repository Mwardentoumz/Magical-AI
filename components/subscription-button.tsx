"use client"


import axios from 'axios';
import { useState } from 'react';


import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import { toast } from 'react-hot-toast';



interface SubscriptionButtonProps {
    isPro: boolean;
}


const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonProps) => {

    const [loading, setLoading] = useState(false);
    const onClick = async () => {
        try{
            setLoading(true);
            const response = await axios.get('/api/stripe');

            window.location.href = (await response).data.url;
        }

        catch(error){
            console.log(error, "BILLING ERROR")
            toast.error("Something went wrong. Please try again later.")
        }
        finally {
            setLoading(false);
        }
    }

    return ( 

        <Button variant={isPro ? "default" : "premium"} onClick={onClick} disabled={loading}>
            {isPro? "Manage Subscription" : "Subscribe to Magical Premium"}
            {!isPro && <Zap className='w-4 h-4 ml-2 fill-white'/>}
        </Button>

     );
}
 
export default SubscriptionButton;
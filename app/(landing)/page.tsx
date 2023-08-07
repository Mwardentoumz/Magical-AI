

import { LandingContent } from "@/test/components/landing-content";
import { LandingHero } from "@/test/components/landing-hero";
import { LandingNavbar } from "@/test/components/landing-navbar";

const LandingPage = () => {
    return ( 
        <div className="h-full">
            <LandingNavbar/>
            <LandingHero/>
            <LandingContent/>
        </div>
     );
}
 
export default LandingPage;
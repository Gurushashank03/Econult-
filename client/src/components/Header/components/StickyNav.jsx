import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import Headroom from "react-headroom";

const StickyNav = () => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed z-50 top-0 left-0 right-0 transition-all ${showNav ? "" : "hidden"
                }`}
        >
            <Headroom>
                <BottomNav />
            </Headroom>
        </nav>
    );
};

export default StickyNav;
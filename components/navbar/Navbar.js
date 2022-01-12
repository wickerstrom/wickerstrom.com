
import NavLink from 'next/link';
import styles from '../../styles/navbar.module.css'
import React, { useEffect, useState } from "react";
import MobileDrawer from './MobileDrawer';

const navbarConfig = [
    {
        'link': '/portfolio',
        'label': 'Portfolio',
    },
    {
        'link': '/resume',
        'label': 'Resume',
    },
    {
        'link': '/about',
        'label': 'About',

    },
    {
        'link': '/contact',
        'label': 'Let\'s get in touch',
    }]

function Navbar() {
    let isMobile = false;
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    isMobile = windowDimension <= 640;

    return <div>
        {!isMobile ? (
            <div className={styles.navbar}>
                <div>
                    <NavLink href={'/'}>
                        <a className={styles.hoverunderlineanimation}>
                            {'Home'}
                        </a>
                    </NavLink>
                </div>
                <div>
                    {navbarConfig.map((navBarItem, index) => (
                        <NavLink key={index} href={navBarItem.link}>
                            <a className={styles.hoverunderlineanimation}>
                                {navBarItem.label}
                            </a>
                        </NavLink>
                    ))}
                </div>
            </div>
        ) : (
            <MobileDrawer navbarConfig={navbarConfig} />
        )}
    </div>
}

export default Navbar


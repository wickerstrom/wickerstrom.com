
import NavLink from 'next/link';
import styles from '../../styles/navbar.module.css'
import React, { useEffect } from "react";
import MobileDrawer from './MobileDrawer';
import ActiveLink from './ActiveLink'
import useResizer from "../../hooks/windowResizer";

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
    const { isMobile, handleSizeChange } = useResizer();

    useEffect(() => {
        handleSizeChange();
    }, []);


    return <div>
        {!isMobile ? (
            <div className={styles.navbar}>
                <div>
                    <NavLink href={'/'}>
                        <h4>
                            <a className={styles.home}>
                                {'CHRISTIAN WICKERSTRÖM'}
                            </a>
                        </h4>
                    </NavLink>
                </div>
                <div>
                    <style jsx>{`
                    .active {
                        text-decoration: underline;
                        pointer-events: none;
                    }
                    `}</style>
                    {navbarConfig.map((navBarItem, index) => (
                        <ActiveLink activeClassName={"active"} key={index} href={navBarItem.link}>
                            <a className={styles.underLine}>
                                {navBarItem.label}
                            </a>
                        </ActiveLink>
                    ))}
                </div>
            </div>
        ) : (
            <MobileDrawer navbarConfig={navbarConfig} />
        )}
    </div>
}

export default Navbar


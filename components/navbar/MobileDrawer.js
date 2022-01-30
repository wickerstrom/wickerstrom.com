import NavLink from 'next/link';
import { useState } from "react";
import styles from '../../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function MobileDrawer(props) {
    const { navbarConfig } = props;
    const [isActive, setIsActive] = useState(false);

    return <div className={styles.mobileDrawerWrapper}>

        <div className={styles.mobileDrawerIconWrapper}>
            <FontAwesomeIcon className={styles.mobileDrawerIcon} icon={faBars} size={'2x'} onClick={() => setIsActive(!isActive)} />
        </div>
        {isActive &&
            <div className={styles.activeMobileWrapper}>
                <div className={styles.mobileDrawerIconWrapper}>
                    <FontAwesomeIcon className={styles.mobileDrawerIcon} icon={faTimes} size={'2x'} onClick={() => setIsActive(!isActive)} />
                </div>
                <div className={styles.mobileNavLinks}>
                    <ul>
                        <li>
                            <NavLink onClick={() => setIsActive(!isActive)} href={'/'}>
                                <a>Home</a>
                            </NavLink>
                        </li>
                        {navbarConfig.map((navBarItem, index) => (
                            <li key={index}>
                                <NavLink onClick={() => setIsActive(!isActive)} href={navBarItem.link}>
                                    <a>
                                        {navBarItem.label}
                                    </a>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
    </div>
}

export default MobileDrawer

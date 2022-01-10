import NavLink from 'next/link';
import { useState } from "react";
import styles from '../../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MobileDrawer(props) {
    const { navbarConfig } = props;
    const [isActive, setIsActive] = useState(false);

    return <div className={styles.mobileDrawerWrapper}>
        {!isActive && <FontAwesomeIcon icon={faBars} size={'2x'} onClick={() => setIsActive(!isActive)} />}
        {isActive &&
            <div className={styles.activeMobileWrapper}>
                <h1 className={styles.cross} onClick={() => setIsActive(!isActive)}>X</h1>
                <ul>
                    {navbarConfig.map((navBarItem, index) => (
                        <li key={index}>
                            <NavLink  onClick={() => setIsActive(!isActive)}  href={navBarItem.link}>
                                <a>
                                    {navBarItem.label}
                                </a>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>}
    </div>
}

export default MobileDrawer

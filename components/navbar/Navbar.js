
import Link from 'next/link';
import styles from '../../styles/navbar.module.css'

const navbarConfig = [{
    'link': '/',
    'label': 'CW',
},
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
    return <div className={styles.navbar}>
        {navbarConfig.map((navBarItem, index) => (
            <Link key={index} href={navBarItem.link}>
                <a className={styles.hoverunderlineanimation}>
                {navBarItem.label}
                </a>
            </Link>
        ))}
    </div>
}

export default Navbar


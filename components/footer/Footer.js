import styles from '../../styles/footer.module.css'
import FooterIcon from './FooterIcon'
import GitHub from './img/github.png';
import LinkedIn from './img/linkedin.png';
import Mail from './img/mail.png';

const footerConfig = [{
  'src': GitHub,
  'url': 'https://github.com/wickerstrom',
  'alt': 'Github Logo'
},
{
  'src': LinkedIn,
  'url': 'https://www.linkedin.com/in/christian-wickerstr%C3%B6m-973a53b0/',
  'alt': 'Linkedin Logo'
},
{
  'src': Mail,
  'url': 'mailto:christian@wickerstrom.com',
  'alt': 'Email Logo'
},
]

function Footer() {
  let d = new Date();
  let currentYear = d.getFullYear();


  return <div className={styles.footer}>

    <div className={styles.footerIconsWrapper}>
      {footerConfig.map((footerIcon, index) => (
        <div key={index} className={styles.footerIcon}><FooterIcon key={index} src={footerIcon.src} url={footerIcon.url} alt={footerIcon.alt}/></div>
      ))}
    </div>

    <div className={styles.copyright}>
      <small>&copy; Copyright Christian Wickerström {currentYear}, All right reserved.</small>
    </div>
  </div>
}

export default Footer
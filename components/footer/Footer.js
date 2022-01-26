import styles from '../../styles/footer.module.css'
import FooterIcon from './FooterIcon'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const footerConfig = [{
  'icon': faGithub,
  'size': '2x',
  'url': 'https://github.com/wickerstrom'
},
{
  'icon': faLinkedin,
  'size': '2x',
  'url': 'https://www.linkedin.com/in/christian-wickerstr%C3%B6m-973a53b0/'
},
{
  'icon': faEnvelope,
  'size': '2x',
  'url': 'mailto:christian@wickerstrom.com'
},
]

function Footer() {
  let d = new Date();
  let currentYear = d.getFullYear();


  return <div className={styles.footer}>

    <div className={styles.footerIconsWrapper}>
      {footerConfig.map((footerIcon, index) => (
        <div key={index} className={styles.footerIcon}><FooterIcon key={index} icon={footerIcon.icon} size={footerIcon.size} url={footerIcon.url} /></div>
      ))}
    </div>

    <div className={styles.copyright}>
      <small>&copy; Copyright Christian Wickerström {currentYear}, All right reserved.</small>
    </div>
  </div>
}

export default Footer
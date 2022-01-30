import Image from 'next/image'
import styles from '../../styles/footer.module.css'

function FooterIcon(props) {
    const { src, url, alt } = props;
 
    return <div>
        <a href={url}>
            <Image
                src={src}
                className={styles.footerIconImg}
                width={35}
                height={35}
                alt={alt}
            />
        </a>
    </div>
}

export default FooterIcon

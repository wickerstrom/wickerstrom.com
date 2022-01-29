import Image from 'next/image'
import styles from '../../styles/footer.module.css'

function FooterIcon(props) {
    const { src, url } = props;

    console.log(src);
    console.log(url);

    return <div>
        <a href={url}>
            <Image
                src={src}
                className={styles.footerIconImg}
                width={35}
                height={35}
            />
        </a>
    </div>
}

export default FooterIcon

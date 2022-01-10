import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterIcon(props) {
    const { icon, size, url } = props;

    return <div>
        <a href={url}>
            <FontAwesomeIcon icon={icon} size={size} />
        </a>
    </div>
}

export default FooterIcon

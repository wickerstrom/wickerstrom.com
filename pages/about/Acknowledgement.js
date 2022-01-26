import RichTextWrapper from "../../components/common/RichTextWrapper";

function Acknowledgement({ acknowledgement }) {
    const { title, role, company, acknowledgementText } = acknowledgement?.fields || {};

    return <div>
        <RichTextWrapper richText={acknowledgementText ? acknowledgementText : null} />
        <h5>{title} - {role} at {company}</h5>
    </div>
}

export default Acknowledgement

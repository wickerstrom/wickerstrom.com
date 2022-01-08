import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function RichTextWrapper({ richText }) {
    return <div>
        {documentToReactComponents(richText)}
    </div>
}

export default RichTextWrapper
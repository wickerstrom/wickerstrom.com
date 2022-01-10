import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function RichTextWrapper({ richText }) {
    return <div>
        {richText ? documentToReactComponents(richText) : null}
    </div>
}

export default RichTextWrapper
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FormatToCode = ({ children, language }) => {

    return (

        <SyntaxHighlighter language={language} style={coldarkDark} showLineNumbers={true}>
            {children}
        </SyntaxHighlighter>
    );
}

export default FormatToCode;
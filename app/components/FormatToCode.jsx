const FormatToCode = ({ children }) => {
    return (
        <pre>
            <code>{children}</code>
            <span className="bg-black">test</span>
        </pre>
    );
}
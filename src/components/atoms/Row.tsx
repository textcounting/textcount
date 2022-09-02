function Row(props:any) {
    let css = "row";
    if (props.className !== null && props.className !== undefined) {
        css += ` ${props.className}`;
    }

    return (
    <div className={css}>
        {props.children}
    </div>);
};

export default Row;
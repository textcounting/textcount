function Column(props:any) {
    let css = `col-${props.size}`;
    if (props.className !== null && props.className !== undefined) {
        css += ` ${props.className}`;
    }
    return (
    <div className={css}>
        {props.children}
    </div>);
};

export default Column;
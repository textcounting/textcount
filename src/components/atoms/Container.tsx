function Container(props:any) {
    let css = "container " + props.className;

    return (
    <div className={css}>
        {props.children}
    </div>);
};

export default Container;
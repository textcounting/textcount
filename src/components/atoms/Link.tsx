function Link(props:any) {
    return (
    <a className={props.className} href={props.href}>
        {props.children}
    </a>);
};

export default Link;
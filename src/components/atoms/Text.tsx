function Text(props:any) {
    switch (Number(props.size)) {
        case 1:
            return (<h1 className={props.className}>{props.children}</h1>);
        case 2:
            return (<h2 className={props.className}>{props.children}</h2>);
        case 3:
            return (<h3 className={props.className}>{props.children}</h3>);
        case 4:
            return (<h4 className={props.className}>{props.children}</h4>);
        case 5:
            return (<h5 className={props.className}>{props.children}</h5>);
        default:
            return (<h6 className={props.className}>{props.children}</h6>);
    }
};

export default Text;
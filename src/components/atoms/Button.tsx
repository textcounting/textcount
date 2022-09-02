function Button(props:any) {
    let css = (props.className !== null && props.className !== undefined) ? "btn " + props.className : "btn";
    let id = (props.id !== null && props.id !== undefined) ? props.id : "";
    let name = (props.name !== null && props.name !== undefined) ? props.name : "";

    return (
    <button id={id} name={name} type={props.type} className={css} onClick={props.onClick}>
    {props.children}
    </button>
    );
};

export default Button;
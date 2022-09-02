function ListItem(props:any) {
    let css = "list-group-item " + props.className;

    return (
    <li className={css} id={props.id} onClick={props.onClick}>
        {props.children}
    </li>);
};

export default ListItem;
function List(props:any) {
    let css = "list-group " + props.className;

    return (
    <ul className={css} id={props.id}>
        {props.children}
    </ul>);
};

export default List;
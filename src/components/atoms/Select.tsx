function Select(props:any) {
    let css = (props.className !== null && props.className !== undefined) ? "form-control" : "form-control " + props.className;

    return (
    <select name={props.name} id={props.id} className={css} onChange={props.onChange}>
    {(props.data !== null && props.data !== undefined && props.data.length > 0) ? props.data.map((item:any) => (
        <option value={item.key} key={item.key}>
            {item.label}
        </option>
    )) : props.children }
    </select>
    );
};

export default Select;
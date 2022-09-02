function TextArea(props:any) {
    let css = (props.className !== null && props.className !== undefined) ? "form-control " + props.className : "form-control";
    let id = (props.id !== null && props.id !== undefined) ? props.id : "";
    let name = (props.name !== null && props.name !== undefined) ? props.name : "";
    let readonly = (props.readonly !== null && props.readonly !== undefined) ? props.readonly : false;
    let size = (props.size !== null && props.size !== undefined) ? props.size : 3;
    return (
    (readonly) ?
    <textarea id={props.id} name={props.name} className={css} disabled={true} rows={size} onChange={props.onChange}>
    {props.children}
    </textarea>
    :
    <textarea id={props.id} name={props.name} className={css} rows={size} onChange={props.onChange}>
    {props.children}
    </textarea>
    );
};

export default TextArea;
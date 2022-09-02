function Input(props:any) {
    let css = (props.className !== null && props.className !== undefined) ? "form-control " + props.className : "form-control";
    let type = (props.type !== null && props.type !== undefined) ? props.type : "text";
    let id = (props.id !== null && props.id !== undefined) ? props.id : "";
    let name = (props.name !== null && props.name !== undefined) ? props.name : "";
    let defaultValue = (props.defaultValue !== null && props.defaultValue !== undefined) ? props.defaultValue : "";
    let placeholder = (props.placeholder !== null && props.placeholder !== undefined) ? props.placeholder : "";
    let readonly = (props.readonly !== null && props.readonly !== undefined) ? props.readonly : false;

    return (
    (readonly) ? 
    <input 
        type={type} 
        id={id}
        name={name} 
        className={css} 
        defaultValue={defaultValue} 
        placeholder={placeholder} 
        readOnly={readonly}
        />
        :
        <input 
        type={type} 
        id={id}
        name={name} 
        className={css} 
        defaultValue={defaultValue} 
        placeholder={placeholder} 
        />
    );
};

export default Input;
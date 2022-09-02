function Form(props:any) {
    return (
    <div id={props.id} className={props.className}>
        {props.children}
    </div>);
};

export default Form;
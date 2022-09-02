function Card(props:any) {
    let css = "card " + props.className;
    let imgTag = null;
    let title = null;
    if (props.image !== null && props.image !== undefined && props.image !== "") {
        imgTag = <img className="card-img-top" src="${props.image}" alt="" />;    
    }
    if (props.title !== null && props.title !== undefined && props.title !== "") {
        title = <h5 className="card-title">{props.title}</h5>;    
    }
    return (
    <div className={css}>
        {imgTag}
        <div className="card-body">
        {title}
        {props.children}
        </div>
    </div>);
};

export default Card;
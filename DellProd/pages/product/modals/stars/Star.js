const Star = ({checked = true, onStarClick}) =>
    <span className={checked ? `fa fa-star check` : "fa fa-star"} onClick={onStarClick}/>

export default Star
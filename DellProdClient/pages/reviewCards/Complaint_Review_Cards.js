const Complaint_Review_Cards = ({username, review, date}) =>
    <div className="ui card">
        <div className="content">
            <div className="header">{username}</div>
            <div className="meta">
                <span><i className="calendar alternate icon"></i></span>
                <a>{date}</a>
            </div>
            <p>{review}</p>
        </div>
    </div>

export default Complaint_Review_Cards
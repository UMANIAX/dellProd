export default ({info}) =>
    <div className="ui link cards">
        <div className="card">
            <div className="image">
                <img src={info.imgURL}/>
            </div>
            <div className="content">
                <div className="header">{info.title}</div>
                <div className="meta">
                    <a>{info.price}</a>
                </div>
                <div className="description">
                    {info.description}
                </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                  {info.category}
              </span>
              <span>
                  NULL
              </span>
            </div>
        </div>
    </div>
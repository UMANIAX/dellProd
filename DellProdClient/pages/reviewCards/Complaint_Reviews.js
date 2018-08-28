import Complaint_Review_Cards from './Complaint_Review_Cards'

const Complaint_Reviews = ({reviews}) =>
    <div className="ui raised very padded text segment segment-width">
        <h2 className="ui header">Reviews</h2>
        {reviews.map((item, ind) => <Complaint_Review_Cards key={ind} {...item}/>)}
    </div>

export default Complaint_Reviews
import Star from './Star'

export default ({currentRate, update}) =>
    <div>
        {[...Array(5)].map((acc, ind) => <Star key={ind} checked={ind < currentRate}
                                               onStarClick={() => update(ind + 1)}/>)}
    </div>
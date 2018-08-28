import Star from './Star'

export default ({currentRate, update, index}) =>
    <div>
        {[...Array(5)].map((acc, ind) => <Star key={ind} checked={ind < currentRate}
                                               onStarClick={() => update(index, ind + 1)}/>)}
    </div>
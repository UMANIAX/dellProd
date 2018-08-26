export default ({cat, changeCat}) =>
    <div className="ui large vertical menu">
        <a className={cat === 0 ? `item active` : `item`} onClick={() => changeCat(0)}>
            All Products
        </a>
        <a className={cat === 1 ? `item active` : `item`} onClick={() => changeCat(1)}>
            Category 1
        </a>
        <a className={cat === 2 ? `item active` : `item`} onClick={() => changeCat(2)}>
            Category 2
        </a>
        <a className={cat === 3 ? `item active` : `item`} onClick={() => changeCat(3)}>
            Category 3
        </a>
    </div>
import C from './constants'

const uuidv1 = require('uuid/v1')

export const buyProduct = (asin, cat) => ({

    type: C.BUY_PRODUCT,
    asin: asin,
    categories: cat
})

export const viewProduct = (asin, cat) => ({

    type: C.VIEW_PRODUCT,
    asin: asin,
    categories: cat
})

export const reviewProduct = (asin, review, score) => ({

    type: C.REVIEW_PRODUCT,
    asin: asin,
    review: review,
    score: score
})

export const complaintProduct = (asin, complaint) => ({

    type: C.COMPLAINT_PRODUCT,
    complaintId: uuidv1(),
    asin: asin,
    complaint: complaint
})

export const complaintFeedback = (asin, rating) => ({

    type: C.COMPLAINT_FEEDBACK,
    asin: asin,
    rating: rating
})

export const changeInitState = (state) => ({

    type: C.CHANGE_INIT_STATE,
    state: state
})
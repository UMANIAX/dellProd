import C from './constants'

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

export const reviewProduct = (asin, review) => ({

    type: C.REVIEW_PRODUCT,
    asin: asin,
    review: review
})

export const complaintProduct = (asin, complaint) => ({

    type: C.COMPLAINT_PRODUCT,
    asin: asin,
    complaint: complaint
})
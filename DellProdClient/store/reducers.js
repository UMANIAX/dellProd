import C from '../constants'

export const products = (state = {}, action) => {

    switch (action.type) {

        case C.REVIEW_PRODUCT:
            state.forEach(item => item.asin === action.asin ? item.reviews.push(action.review) : null)
            return state

        default:
            return state
    }
}

export const customerMeta = (state = {}, action) => {

    switch (action.type){

        case C.BUY_PRODUCT:
            state.productsBought.push({
                asin: action.asin,
            })
            return state

        case C.REVIEW_PRODUCT:
            state.productsBought.forEach(item => item.asin === action.asin ? item.review = action.review : null)
            return state

        case C.COMPLAINT_PRODUCT:
            state.productsBought.forEach(item => item.asin === action.asin ? item.complaint = {
                placedOn: new Date(),
                issue: action.complaint,
                onGoing: true
            }: null)
            return state

        case C.COMPLAINT_FEEDBACK:
            state.productsBought.forEach(item => item.asin === action.asin ? () => {
                item.complaint.feedbackRating = action.rating
                item.complaint.onGoing = false
            }: null)
            return state

        default:
            return state
    }
}

export const customerML = (state = {}, action) => {

    switch (action.type){

        case C.BUY_PRODUCT:
            state['c' + action.categories] -= 1
            state['p' + action.categories] += 1
            return state

        case C.VIEW_PRODUCT:
            state['c' + action.categories] += 1
            return state

        case C.REVIEW_PRODUCT:
            state.reviewCount += 1
            // call flask api
            return state

        case C.COMPLAINT_FEEDBACK:
            state.feedbackCount += 1
            state.serviceFeedbackSentiment = (state.serviceFeedbackSentiment + action.rating) / state.feedbackCount
            return state

        default:
            return state
    }
}
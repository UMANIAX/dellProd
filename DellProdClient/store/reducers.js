import C from '../constants'

export const products = (state = {}, action) => {

    switch (action.type) {

        case C.REVIEW_PRODUCT:
            state = state.map(item => {
                item.asin === action.asin ? item.reviews.push(action.review) : null
                return item
            })
            return state

        case C.CHANGE_INIT_STATE:
            return action.state.products

        default:
            return state
    }
}

export const customerMeta = (state = {}, action) => {

    switch (action.type) {

        case C.BUY_PRODUCT:
            state.productsBought.push({
                asin: action.asin,
            })
            return state

        case C.REVIEW_PRODUCT:
            state.productsBought = state.productsBought.map(item => {

                item.asin === action.asin ? item.review = action.review : null
                return item
            })
            return state

        case C.COMPLAINT_PRODUCT:
            state.productsBought = state.productsBought.map(item => {

                if (item.asin === action.asin)
                    item.complaint = {
                        placedOn: new Date(),
                        issue: action.complaint,
                        onGoing: true,
                        isNew: true,
                        id: action.complaintId
                    }

                return item
            })
            return state

        case C.COMPLAINT_FEEDBACK:
            state.productsBought = state.productsBought.map(item => {

                if (item.asin === action.asin) {
                    item.complaint.feedbackRating = action.rating
                    item.complaint.onGoing = false
                }

                return item
            })
            return state

        case C.CHANGE_INIT_STATE:
            return action.state.customerMeta

        default:
            return state
    }
}

export const customerML = (state = {}, action) => {

    switch (action.type) {

        case C.BUY_PRODUCT:
            state['c' + action.categories] -= 1
            state['p' + action.categories] += 1
            return state

        case C.VIEW_PRODUCT:
            state['c' + action.categories] += 1
            state.isAltered = true
            return state

        case C.REVIEW_PRODUCT:
            state.reviewCount += 1
            state.reviewSentiment = action.score
            return state

        case C.CHANGE_INIT_STATE:
            return action.state.customerML

        default:
            return state
    }
}
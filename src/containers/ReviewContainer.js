import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

import Comment from '../components/Comment'
import Icon from '../components/shared/Icon/Icon'
import Button from '../components/shared/Button/Button'
import { getAllReviews, approveReview } from '../actions'

const ReviewContainer = ({ loading, reviews, getAllReviews, approveReview }) => {

    const [approved, setApproved] = useState(0)
    useEffect(() => getAllReviews(), [approved])

    const handleApprove = async(id) => {
        await approveReview(id)
        setApproved(id)
    }

    return (
        <div className="flex flex-col items-center my-16 px-8">
            <div className="w-full md:w-9/12 lg:w-9/12">
                <div className="flex items-center justify-center text-center">
                <span className="pl-2 text-xl mb-4">Reviews</span>
                </div>
            </div>
           {!loading ? (
                <div className="md:w-9/12 lg:w-9/12">
                    {reviews.map((review, i) => (
                        <div key={i} className="flex items-center w-full">
                        <Comment
                            comment={review}
                        />
                        <div className="ml-auto flex items-center">
                            <span className="text-13 mr-4">{review.status}</span>
                            <Button variant="empty" onClick={() => handleApprove(review.id)}>Approve</Button>
                        </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div><Icon name="spin" className="spinner" /></div>
            )}
        </div>
    )
}
const mapStateToProps = ({ reviews }) => ({
    reviews: reviews.reviews,
    loading: reviews.loading,
})

export default connect(mapStateToProps, { getAllReviews, approveReview })(ReviewContainer)
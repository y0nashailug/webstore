
import { useRef, useState } from "react"
import { connect } from 'react-redux'

import Textarea from "./shared/Textarea/Textarea"
import Button from "./shared/Button/Button"
import Avatar from "./shared/Avatar/Avatar"
import { addReview } from '../actions'
import DefaultProfile from '../assets/avatar.png'

const Comment = ({ comment = {}, isCreate = false, dispatch, productId, refetch }) => {

    const [newComment, setNewComment] = useState('')
    const [isWorking, setIsWorking] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const textareaRef = useRef()
    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }
    const handleSubmit = async() => {
        setIsWorking(true)
        await dispatch(addReview(productId, {
          description: newComment
        }))
        refetch()
        setIsFormOpen(false)
        setIsWorking(false)
    }
    const handleCancel = () => {
        setIsFormOpen(false)
    }

    const handleTextareaClicked = () => {
        setIsFormOpen(true)
        // textareaRef.current.focus()
    }

    return (
        <div className="relative mt-6 text-15">
        <Avatar
          className="absolute top-0 left-0"
          name={comment.buyer ? comment.buyer.name: ''}
          avatarUrl={comment.buyer ? DefaultProfile: null}
        />
        <div className="pl-10">
          { !isCreate && comment.buyer ? <div
            className="inline-block mr-1 mb-2 text-textDark font-medium"
          >{comment.buyer.name}</div>: null}
            {isFormOpen ?
          <div>
            <Textarea
              autoFocus
              rows="2"
              onKeyDown={handleKeyDown}
              onInput={(val) => setNewComment(val)}
              placeholder="Add a review..."
              onRef={textareaRef}
            />
            <div className="flex pt-2 items-center">
              <Button
                className="mr-2"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                isWorking={isWorking}>
                Comment
              </Button>
              <Button variant="empty" onClick={handleCancel}>Cancel</Button>
            </div>
          </div>:
          <div>
              {comment.description ? <p className="pb-2 whitespace-pre-wrap">{ comment.description }</p>: null}

              {isCreate ? <p
                onClick={handleTextareaClicked}
              className="fakeTa pb-2 whitespace-pre-wrap"
            >
              Add a review...
            </p>: null}
            </div>}
          </div>
        </div>
    )
}

export default connect()(Comment)
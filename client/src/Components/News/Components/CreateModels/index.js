import { Modal } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { modelState$ } from '../../selectors'

export default function CreatePostModel() {
    const { isShow } = useSelector(modelState$);

    const body = <p>'This is body'</p>


    return (
        <div>
            <Modal open={isShow} >
                {body}
            </Modal>
        </div>
    )
}

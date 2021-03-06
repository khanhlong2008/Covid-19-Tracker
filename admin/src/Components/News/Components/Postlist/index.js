import { Grid } from '@material-ui/core'
import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions'
import { postsState$ } from '../../selectors'

export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$)

    // console.log('[PostList - Post]', posts)
    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch])

    return (
        <Grid container spacing={2}>

            {posts.map((post) => (
                <Grid item sm={6} xs={12}>
                    <Post post={post} />
                </Grid>
            ))}

        </Grid>
    )
}

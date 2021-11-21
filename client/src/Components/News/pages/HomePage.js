import { Container, Fab } from '@material-ui/core'
import React from 'react'
import PostList from '../Components/Postlist'
import AddIcon from '@material-ui/icons/Add'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { showModel } from '../actions'
import CreatePostModel from '../Components/CreateModels'

export default function HomePage() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const openCreatePostModel = React.useCallback(() => {
        dispatch(showModel())
    }, [dispatch])
    return (
        <Container className="">
            <PostList />
            <CreatePostModel />
            <Fab color="primary" className={classes.fab} onClick={openCreatePostModel}>
                <AddIcon />
            </Fab>
        </Container>
    )
}

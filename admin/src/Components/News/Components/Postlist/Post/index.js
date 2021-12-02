/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import {
    Card,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    Avatar,
    CardActions,
    CardContent
} from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import moment from 'moment'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { updatePost } from '../../../actions'
import './index.css'
export default function Post({ post }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    console.log(post)
    const onLikedBtnClick = React.useCallback(() => {
        dispatch(updatePost.updatePostsRequest({ ...post, likeCount: post.likeCount + 1 }))
    }, [dispatch, post])
    const onReadMore = () => {
        let more = document.querySelectorAll('.more');
        for (let i = 0; i < more.length; i++) {
            more[i].addEventListener('click', function () {
                more[i].parentNode.classList.toggle('active');
            })
        }
    }
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia image={post.attachment} title="Title" className={classes.media} />
            <CardContent className="card">
                <div className="content">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
                <a className="more" onClick={onReadMore} />
                {/* <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    {post.content}
                </Typography> */}
            </CardContent>
            <CardActions>
                <IconButton onClick={onLikedBtnClick}>
                    <FavoriteIcon />
                    <Typography component="span" color="textPrimary">
                        {post.likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

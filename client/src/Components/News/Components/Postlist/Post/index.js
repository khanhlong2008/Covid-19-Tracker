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

export default function Post({ post }) {
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
            <CardMedia image={post.attachment} title="Title" />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    This is Title Post
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                    <Typography component="span" color="textPrimary">
                        {post.likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

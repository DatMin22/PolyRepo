import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByEmail } from '../store/Auth/slice'
import { addComment, getCommentByPostID, getPostById } from '../store/Post/slice'
import classnames from "classnames"
import { deleteLikeById, getAllLike, getLikeByPostId, getLikeByUserId, likePost } from '../store/Like/slice'
// import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Modal, Typography } from '@mui/material'
// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Container, Grid, Modal, Stack } from '@mui/material'

export const PostList = () => {
    // * laasy currentUser tuwf localstorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null
    console.log('currentUser: ', currentUser)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        my: 6,
        height: 'max-content'
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // *end MUI






    const { postList, commentListByPostID, listGetPostById } = useSelector(state => state.post)
    const { userLogin, userIslogin } = useSelector(state => state.auth)
    const { likeByPostId, listLike, likePostNew, likeByUserId } = useSelector(state => state.like)
    const [postDetail, setPostDetail] = useState({})
    const [commentContent, setCommentContent] = useState('')
    let user_Id = currentUser?.id
    let post_Id = postDetail?.id
    const disPatch = useDispatch()
    const handleComment = () => {


        disPatch(addComment({
            content: commentContent,
            commentstatus: "true",
            post_id: post_Id,
            user_id: user_Id
        }))
        document.getElementById('cmtList').click()
        setCommentContent('')
    }
    useEffect(() => {
        disPatch(getAllLike())
        // disPatch(getLikeByUserId(userIslogin.id))




    }, [])


    return (
        <div className="" style={{
            margin: "5rem 0",
            width: '100%'
        }}>
            <Container className='' style={{
                marginTop: '5rem'
            }}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        overflowY: 'scroll',
                        padding: '10rem 0',
                    }}
                >
                    <Card sx={style}>
                        <Stack direction={'row'} sx={{ mt: '2rem' }}>
                            <Container component={'main'} >
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={"./images/" + postDetail.filename}
                                    alt={postDetail.filename}
                                    sx={{

                                    }}
                                />
                            </Container>
                            <Stack direction={'column'}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {postDetail.userId}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={postDetail.title}
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography paragraph fontSize={'large'} paddingX={'1rem'}>
                                        {postDetail.description}
                                    </Typography>
                                </CardContent>
                            </Stack>
                        </Stack>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites"
                                className={
                                    classnames('heart', {
                                        isliked: listLike?.find((like) => like?.user_id === currentUser?.id && like?.post_id === postDetail?.id),
                                        // unlike: listLike.find((like) => like.user_id !== userIslogin.id && like.post_id !== postDetail.id),

                                    })}
                                onClick={() => {
                                    const like = listLike?.find((like) => like?.user_id === currentUser?.id && like?.post_id === postDetail?.id)
                                    console.log('like: ', like?.id)

                                    // handleLike()
                                    if (like !== undefined) {
                                        disPatch(deleteLikeById(like.id))
                                        disPatch(getAllLike())
                                        var element = document.querySelector(".heart")
                                        element.classList.remove("isliked")
                                    } else {
                                        disPatch(
                                            likePost({
                                                likeStatus: 'True',
                                                post_id: postDetail?.id,
                                                user_id: currentUser?.id,

                                            }))
                                        disPatch(getAllLike())

                                    }
                                    console.log('like: ', like)


                                }}
                            >
                                <FavoriteIcon />
                            </IconButton>
                            <span>{postDetail?.countlike}</span>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <span className='' id='cmtList'
                                onClick={() => {
                                    disPatch(getLikeByPostId(postDetail?.id))
                                }}>
                                <i className='bx bx-recycle'></i></span>
                            <ExpandMore expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>

                                <div className=" d-block">
                                    {/*! danh sách các bình luận */}
                                    <div className='commentList'>

                                        {
                                            commentListByPostID.map((comment) => {
                                                return (
                                                    <div key={comment.id}
                                                        className='d-flex mt-3'
                                                    >
                                                        <p>
                                                            <span style={{
                                                                fontWeight: 'bolder',
                                                                marginRight: '1rem',
                                                                verticalAlign: 'middle'
                                                            }}>Người dùng {comment.user_id}</span>
                                                        </p>
                                                        <p
                                                            style={{
                                                                color: "#000000",
                                                                borderRadius: '40px',
                                                                padding: '1rem 1.5rem',
                                                                backgroundColor: '#f0f2f5',
                                                                width: "max-content",
                                                                fontSize: '1rem',
                                                                fontWeight: '300',
                                                            }}>
                                                            <span className='ms-2 mt-3'>{comment.content}</span>

                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <span className='' id='cmtList'
                                        onClick={() => {
                                            disPatch(getCommentByPostID(postDetail.id))
                                        }}>
                                        <i className='bx bx-recycle'></i></span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span className='h4'>Bạn nghĩ gì?</span>

                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">

                                        <span className='mr-2'
                                            style={{
                                                fontWeight: 'bolder'
                                            }}>{currentUser?.name}</span>
                                        <input type="text" className='form-control'
                                            style={{
                                                borderRadius: '1rem',
                                                // width: '80%'
                                            }}
                                            onChange={(event) => {
                                                setCommentContent(event.target.value)
                                            }}
                                            value={commentContent}
                                            placeholder='Thêm nhận xét' />
                                        <button className='btn btn-comment'
                                            style={{
                                                borderRadius: '1rem',
                                            }}
                                            onClick={
                                                handleComment


                                            }>Bình luận</button>
                                    </div>
                                </div>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Modal>
            </Container>
            <Box className="postList" sx={{}}>
                {postList?.map((post) => {
                    return (
                        <div className="postItem" key={post.id}
                            data-modal-target="postDetail-modal" data-modal-toggle="postDetail-modal"
                            onClick={() => {
                                setPostDetail(post)
                                disPatch(getCommentByPostID(post.id))
                                disPatch(getLikeByPostId(post.id))
                                disPatch(getPostById(post.id))
                                handleOpen()
                            }}
                        >
                            <img src={post.filename} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h1 className="card-title" style={{ fontSize: '1.4rem' }}>{post.title}</h1>
                            </div>
                        </div>
                    )
                })
                }
            </Box>
        </div >
    )
}

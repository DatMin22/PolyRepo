import { styled } from '@mui/material/styles';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from "classnames"
import { addComment, getCommentByPostID } from '../store/Post/slice'
import { deleteLikeById, getAllLike, getLikeByPostId, likePost } from '../store/Like/slice'
import { CustomButton } from '../Component/CustomButton/CustomButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red } from '@mui/material/colors'
export const PostDetail = () => {
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
    const searchStyle = {
        position: 'absolute',
        // top: '0',
        bottom: '0',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'max-content',
        width: '800px'
    }

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

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






    const { postList, commentListByPostID, PostById } = useSelector(state => state.post)
    console.log('PostById: ', PostById)
    const { userLogin, userIslogin } = useSelector(state => state.auth)
    const { likeByPostId, listLike, likePostNew, likeByUserId } = useSelector(state => state.like)
    const [postDetail, setPostDetail] = useState({})
    const [likeCount, setLikeCount] = useState(PostById?.countlike)
    console.log('likecount: ', likeCount)
    const [listPost, setListPost] = useState(postList)
    const [commentContent, setCommentContent] = useState('')
    // let user_Id = currentUser?.id
    // let post_Id = postDetail?.id
    const disPatch = useDispatch()
    const handleComment = () => {
        if (currentUser !== null) {
            disPatch(addComment({
                content: commentContent,
                commentstatus: "true",
                post_id: PostById?.id,
                user_id: currentUser?.id
            }))
            // document.getElementById('cmtList').click()
            setCommentContent('')
        }


    }
    // const CustomButton = styled(Button)({
    //     backgroundColor: '#1F2937',
    //     '&:hover': {
    //         backgroundColor: '#23424e',
    //     },
    // })
    useEffect(() => {
        disPatch(getAllLike())
        // disPatch(getLikeByUserId(userIslogin.id))




    }, [])

    return (
        <>
            <Grid className='' style={{
                marginTop: '14rem'
            }}>
                {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        overflowY: 'scroll',
                        padding: '10rem 0',
                    }}
                > */}
                <Container >
                    <Stack direction={'row'} sx={{ mt: '2rem' }}>
                        <Container component={'main'} >
                            <CardMedia
                                component="img"
                                height="194"
                                image={PostById.filename}
                                alt={PostById.filename}
                                sx={{

                                }}
                            />
                        </Container>
                        <Stack direction={'column'}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {PostById.userId}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={PostById.title}
                                subheader="September 14, 2023"
                            />
                            <CardContent>
                                <Typography paragraph fontSize={'large'} paddingX={'1rem'}>
                                    {PostById.description}
                                </Typography>
                            </CardContent>
                        </Stack>
                    </Stack>
                    <CardActions disableSpacing>
                        {
                            currentUser !== null ? (
                                <IconButton aria-label="add to favorites"
                                    className={
                                        classnames('heart', {
                                            isliked: listLike?.find((like) => like?.user_id === currentUser?.id && like?.post_id === PostById?.id),
                                            // unlike: listLike.find((like) => like.user_id !== userIslogin.id && like.post_id !== postDetail.id),

                                        })}
                                    onClick={() => {
                                        const like = listLike?.find((like) => like?.user_id == currentUser?.id && like?.post_id == PostById?.id)
                                        console.log('like: ', like)

                                        // handleLike()
                                        //khi đã like rồi. like đã tồn tại
                                        if (like !== undefined) {
                                            disPatch(deleteLikeById(like?.id))
                                            disPatch(getAllLike())
                                            var element = document.querySelector(".heart")
                                            element.classList.remove("isliked")

                                            setLikeCount(likeCount - 1)

                                        }
                                        //khi chưa like. like chưa tồn tại
                                        if (like == undefined) {
                                            disPatch(getAllLike())
                                            disPatch(
                                                likePost({
                                                    likeStatus: 'True',
                                                    post_id: PostById?.id,
                                                    user_id: currentUser?.id,

                                                }))
                                            setLikeCount(likeCount + 1)


                                        }
                                        console.log('like: ', like)


                                    }}
                                >
                                    <FavoriteIcon />
                                </IconButton>
                            ) : (
                                <IconButton aria-label="add to favorites" disabled
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
                                            // setLike(postDetail?.countlike - 1)
                                        } else {
                                            disPatch(
                                                likePost({
                                                    likeStatus: 'True',
                                                    post_id: PostById?.id,
                                                    user_id: currentUser?.id,

                                                }))
                                            disPatch(getAllLike())

                                        }
                                        console.log('like: ', like)


                                    }}
                                >
                                    <FavoriteIcon />
                                </IconButton>
                            )
                        }

                        {/* {likeCount == undefined ? ( */}
                        {/* <span>{PostById?.countlike}</span> */}
                        {/* ) : ( */}
                        <span>{likeCount}</span>
                        {/* )} */}
                        <IconButton aria-label="share" onClick={() => {
                            alert('share nè')
                        }}>
                            <ShareIcon />
                        </IconButton>
                        <span className='' id='cmtList'
                            onClick={() => {
                                disPatch(getLikeByPostId(PostById?.id))
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
                                {/*!@@@@ danh sách các bình luận */}
                                <div className='commentList'>

                                    {
                                        commentListByPostID?.map((comment) => {
                                            return (
                                                <div key={comment?.id}
                                                    className='d-flex mt-3'
                                                >
                                                    <p>
                                                        <span style={{
                                                            fontWeight: 'bolder',
                                                            marginRight: '1rem',
                                                            verticalAlign: 'middle'
                                                        }}>Người dùng {comment?.user_id}</span>
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
                                                        <span className='ms-2 mt-3'>{comment?.content}</span>

                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <span className='' id='cmtList'
                                    onClick={() => {
                                        disPatch(getCommentByPostID(PostById.id))
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
                                    {
                                        currentUser !== null ? (
                                            <CustomButton variant='contained' className='btn btn-comment'
                                                style={{
                                                    borderRadius: '1rem',
                                                }}
                                                onClick={
                                                    handleComment


                                                }>Bình luận</CustomButton>
                                        ) : (
                                            <CustomButton variant='contained' className='btn btn-comment'
                                                style={{
                                                    borderRadius: '1rem',
                                                }}
                                                onClick={
                                                    handleComment
                                                }
                                                disabled
                                                title='Đăng nhập để bình luận'
                                            >Bình luận</CustomButton>
                                        )
                                    }
                                </div>
                            </div>
                        </CardContent>
                    </Collapse>
                </Container>
                {/* </Modal> */}
            </Grid>
        </>
    )
}

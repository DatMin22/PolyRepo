import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByEmail } from '../store/Auth/slice'
import { addComment, getCommentByPostID } from '../store/Post/slice'
import classnames from "classnames"

// import jwt from 'jsonwebtoken'

export const PostList = () => {
    const [isLiked, setIsLiked] = useState(false)

    const classNames = classnames({
        "like-button": true,
        "liked": isLiked,
    });

    const handleLike = () => {
        setIsLiked(!isLiked);
    };


    const { postList, commentListByPostID } = useSelector(state => state.post)
    console.log('postList: ', postList);
    // console.log('commentList: ', commentListByPostID)
    const { userLogin, userIslogin } = useSelector(state => state.auth)
    console.log('userIslogin: ', userIslogin);
    console.log('userLogin: ', userLogin);
    const [postDetail, setPostDetail] = useState({})
    // console.log('postDetail: ', postDetail)

    const [commentContent, setCommentContent] = useState('')
    let user_Id = userIslogin.id
    console.log('userId: ', user_Id);
    let post_Id = postDetail.id
    console.log('postId: ', post_Id);
    const disPatch = useDispatch()
    const handleComment = () => {

        
        disPatch(addComment({
            content: commentContent,
            commentstatus: "true",
            post_id: post_Id,
            user_id: user_Id
        }))
        setCommentContent('')
    }
    useEffect(() => {
        // disPatch(getCommentByPostID(post_Id))
        // if (condition) {

        // }

    })
    return (
        <div className="mt-5">
            <div className="postList">
                {postList?.map((post) => {
                    return (
                        <div className="postItem" key={post.id} data-toggle="modal" data-target="#exampleModal"
                            onClick={() => {
                                // disPatch(getUserByEmail(userLogin.email))
                                setPostDetail(post)
                                disPatch(getCommentByPostID(post.id))
                                console.log('post: ', post);
                                // console.log('postId: ', post.id, "\nuserId: ", post.userId);

                            }}
                        >

                            <img src={"./images/" + post.filename} className='card-img-top' alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{post.title}</h4>
                            </div>


                        </div>
                    )
                })

                }

                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button> */}


                {/* <!-- Modal postDetail --> */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6">
                                        <h4>{console.log(postDetail)}</h4>
                                        <img src={"./images/" + postDetail.filename} alt="" style={{
                                            width: '100%', height: '100%', objectFit: "cover", borderRadius: 8
                                        }} />

                                    </div>
                                    <div className="col-6">
                                        <div className='d-flex align-items-center'>
                                            <div className='avatarUser'>
                                            </div>
                                            <span className='ml-2'
                                                style={{
                                                    fontWeight: 'bolder'
                                                }}>Người dùng {postDetail.userId}</span>
                                        </div>
                                        <h2>{postDetail.title}</h2>
                                        <p>{postDetail.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer d-block">
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
                                <span className=''
                                    onClick={() => {
                                        disPatch(getCommentByPostID(postDetail.id))
                                    }}>
                                    <i className='bx bx-recycle'></i></span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='h4'>Bạn nghĩ gì?</span>
                                    <span className='h1'>
                                        <span className={classNames} onClick={handleLike}>
                                        <i class='bx bxs-heart bx-burst' ></i>
                                        {/* <i class='bx bx-heart-circle bx-burst' ></i> */}
                                    </span></span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">

                                    <span className='mr-2'
                                        style={{
                                            fontWeight: 'bolder'
                                        }}>{userIslogin.name}</span>
                                    <input type="text" className='form-control'
                                        style={{
                                            borderRadius: '1rem',
                                            // width: '80%'
                                        }}
                                        onChange={(event) => {
                                            setCommentContent(event.target.value)
                                            // setComment({ ...comment,  })
                                            console.log('event: ', commentContent);
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
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

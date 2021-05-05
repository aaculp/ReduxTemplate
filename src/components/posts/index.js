import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
import Newsletter from '../utils/NewsLetter'
import { getPostById, clearPostById } from '../../store/actions'

import { showToast } from '../utils/Tools'

const PostComponent = (props) => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();

    // Get post by ID
    useEffect(() => {
        dispatch(getPostById(props.match.params.id))
    }, [dispatch, props.match.params.id])

    // Clears post so it can grab the right one
    useEffect(() => {
        return () => {
            dispatch(clearPostById())
        }
    }, [dispatch])

    // dealing with 404
    useEffect(() => {
        if (posts.postByID === "404 Error") {
            showToast("ERROR", "You found a bug, and im the exterminator!")
            props.history.push("/")
        }
    }, [posts, props.history])

    return (
        <>
            {posts.postByID ?
                <div className="article_container">
                    <h1>{posts.postByID.title}</h1>
                    {/* <img src={posts.postByID.image} /> */}
                    <div className="image" style={{ background: `url(${posts.postByID.image})` }}></div>

                    <div className="author">
                        <span>Created By: {posts.postByID.author} - </span>
                        <Moment format="MM/DD/YYYY">
                            {posts.postByID.createdAt}
                        </Moment>
                    </div>

                    <div className="mt-3 content">
                        <div dangerouslySetInnerHTML={
                            { __html: posts.postByID.content }
                        }>
                        </div>
                    </div>

                </div>
                : null
            }
            <Newsletter />
        </>
    )
}

export default PostComponent;

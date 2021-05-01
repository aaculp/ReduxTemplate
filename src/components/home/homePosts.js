import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../store/actions'

import { Spinner, Button, NavItem } from 'react-bootstrap'
import Masonry from 'react-masonry-css'
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap'

const HomePosts = () => {
    const homePosts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getPosts({}, 1, "desc", 6))
    }, [dispatch])

    const loadMorePost = () => {
        const page = homePosts.page + 1
        setLoading(true)

        dispatch(getPosts(homePosts, page, "desc", 6)).then(() => {
            setTimeout(() => {
                setLoading(false)
            }, 500)
        })

    }
    return (
        <>

            <Masonry
                breakpointCols={{
                    default: 3,
                    1200: 3,
                    800: 2,
                    400: 1,
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {homePosts.posts ?
                    homePosts.posts.map(post => (
                        <div key={post.id}>
                            <img
                                src={post.image}
                                style={{
                                    width: "100%",
                                    height: "200px"
                                }}
                            />
                            <div className="author">
                                <span>{post.author} - </span>
                                <Moment format="MM/DD/YYYY">
                                    {post.createdAt}
                                </Moment>
                            </div>

                            <div className="content">
                                <div className="title">{post.title}</div>
                                <div className="excerpt">{post.excerpt}</div>
                                <LinkContainer
                                    to={`article/${post.id}`}
                                    className="mt-2"
                                >
                                    <Button variant="light">Read More</Button>
                                </LinkContainer>
                            </div>
                        </div>
                    ))
                    : null
                }
            </Masonry>

            {
                loading ?
                    <div style={{ textAlign: 'center' }}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    : null
            }


            {
                !homePosts.end && !loading ?
                    <Button variant="outline-dark" onClick={() => loadMorePost()}>
                        Load More Post
                </Button>
                    : null
            }
        </>
    )
}

export default HomePosts

import { bindActionCreators } from 'redux';
import * as api from '../../api';
import {
    GET_POSTS,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER,
    GET_POST_BY_ID,
    CLEAR_POST_BY_ID
} from '../types'


// THIS IS FOR POSTS
export const getPosts = (homstPosts, page, order, limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(homstPosts, page, order, limit)
})

export const getPostById = (id) => ({
    type: GET_POST_BY_ID,
    payload: api.getPostById(id)
})

export const clearPostById = (id) => ({
    type: CLEAR_POST_BY_ID,
    payload: {}
})


// THIS IS FOR NEWSLETTER / USERS
export const addNewsletter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsletter(data)
})



// THIS IS FOR CLEARING STATE FROM NEWSLETTER
export const clearNewsletter = (data) => ({
    type: CLEAR_NEWSLETTER,
    payload: {
        newsletter: false,
        email: {}
    }
})

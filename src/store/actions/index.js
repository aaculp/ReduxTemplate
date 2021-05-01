import { bindActionCreators } from 'redux';
import * as api from '../../api';
import {
    GET_POSTS
} from '../types'

export const getPosts = (homstPosts, page, order, limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(homstPosts, page, order, limit)
})
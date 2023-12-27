
/*
author: Paul Kim
date: December 16, 2023
version: 1.0
description: posts router for CocoDogo
 */

import express from "express"
const posts = express.Router()

import { createPost, getPost, getPosts, getMorePosts, updatePost } from "../controller"

posts.route('/').get(getPosts).post(createPost)
posts.route('/page/:page').get(getMorePosts)
posts.route('/:postId').get(getPost).post(updatePost)

export default posts 
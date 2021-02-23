import { usersAPI } from "../api/api";

const SET_USERS = 'SET-USERS';
const SET_USER_POSTS = 'SET-USER-POSTS';
const ADD_POST = 'ADD-POST';
const SET_USER = 'SET-USER';

const initialState = {
  user: null,
  users: [],
  userPosts: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_USER_POSTS: {
      return {
        ...state,
        userPosts: action.userPosts
      }
    }
    case ADD_POST: {
      const newPost = {
        post: action.postText
      };
      return {
        ...state,
        userPosts: [...state.userPosts, newPost],
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUserPosts = (userPosts) => ({ type: SET_USER_POSTS, userPosts });
export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUser = (user) => ({ type: SET_USER, user });

export const getUsersRequest = () => (dispatch) => {
  usersAPI.getAllUsers()
    .then(response => {
      dispatch(setUsers(response.data));
    });
};

export const getUserByIdRequest = (userId) => (dispatch) => {
  usersAPI.getUserById(userId)
    .then(response => {
      console.log(response)
      dispatch(setUser(response.data));
    });
};

export const getPostsByIdRequest = (userId) => (dispatch) => {
  usersAPI.getPostsById(userId)
    .then(response => {
      dispatch(setUserPosts(response.data));
    });
};

export const addPostRequest = (userId, post) => (dispatch) => {
  usersAPI.addPost(userId, post)
    .then(() => dispatch(addPost(post)));
};
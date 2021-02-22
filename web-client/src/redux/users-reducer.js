import { usersAPI } from "../api/api";

const SET_USERS = 'SET-USERS';
const SET_USER_POSTS = 'SET-USER-POSTS';
const ADD_POST = 'ADD-POST';

const initialState = {
  users: [],
  userPosts: [
    {
      id: 1,
      comment: '123123'
    },
    {
      id: 2,
      comment: '123123'
    },
    {
      id: 3,
      comment: '123123'
    }
  ]
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
        id: 4,
        comment: action.postText,
      };
      return {
        ...state,
        userPosts: [...state.userPosts, newPost],
      };
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

export const getUsersRequest = () => (dispatch) => {
  usersAPI.getAllUsers()
    .then(response => {
      dispatch(setUsers(response.data));
    });
};
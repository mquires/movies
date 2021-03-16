import { usersAPI, verificationAPI } from "../api/api";
import { reset } from "redux-form";

const SET_USERS = 'SET-USERS';
const SET_USER_POSTS = 'SET-USER-POSTS';
const ADD_POST = 'ADD-POST';
const SET_USER = 'SET-USER';
const SET_REPORTS = 'SET-REPORTS';
const ADD_REPORT = 'ADD-REPORT';
const SET_USER_BY_EMAIL = 'SET-USER-BY-EMAIL';
const SET_USER_DATA = 'SET-USER-DATA';
const SET_SUCCESS_SENDING = 'SET-SUCCESS-SENDING';
const SET_ADDITIONAL_USER_DATA = 'SET-ADDITIONAL-USER-DATA';
const SET_VERIFICATION_USER_DATA = 'SET-VERIFICATION-USER-DATA';
const SET_ALL_USERS_VERIFICATION_APPLICATIONS = 'SET-ALL-USERS-VERIFICATION-APPLICATIONS'; 

const initialState = {
  user: null,
  users: [],
  userPosts: [],
  reports: [],
  userByEmail: null,
  userData: null,
  successSending: false,
  additionalUserData: [],
  verificationUserData: [],
  allUsersVerificationApplications: []
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
    case SET_REPORTS: {
      return {
        ...state,
        reports: action.reports
      }
    }
    case ADD_REPORT: {
      const newReport = {
        report: action.report,
        name: action.name
      };

      return {
        ...state,
        reports: [...state.reports, newReport]
      }
    }
    case SET_USER_BY_EMAIL: {
      return {
        ...state,
        userByEmail: action.userByEmail
      }
    }
    case SET_USER_DATA: {
      return {
        ...state,
        userData: action.userData
      }
    }
    case SET_SUCCESS_SENDING: {
      return {
        ...state,
        successSending: action.successSending
      }
    }
    case SET_ADDITIONAL_USER_DATA: {
      return {
        ...state,
        additionalUserData: action.additionalUserData
      }
    }
    case SET_VERIFICATION_USER_DATA: {
      return {
        ...state,
        verificationUserData: [...state.verificationUserData, action.verificationUserData]
      }
    }
    case SET_ALL_USERS_VERIFICATION_APPLICATIONS: {
      return {
        ...state,
        allUsersVerificationApplications: action.allUsersVerificationApplications
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
export const setReports = (reports) => ({ type: SET_REPORTS, reports });
export const addReport = (report) => ({ type: ADD_REPORT, report });
export const setUserByEmail = (userByEmail) => ({ type: SET_USER_BY_EMAIL, userByEmail });
export const setUserData = (userData) => ({ type: SET_USER_DATA, userData });
export const setSuccessSending = (successSending) => ({ type: SET_SUCCESS_SENDING, successSending });
export const setAdditionalUserData = (additionalUserData) => ({ type: SET_ADDITIONAL_USER_DATA, additionalUserData });
export const setVerificationUserData = (verificationUserData) => ({ type: SET_VERIFICATION_USER_DATA, verificationUserData });
export const setAllUsersVerificationApplications = (allUsersVerificationApplications) => ({ type: SET_ALL_USERS_VERIFICATION_APPLICATIONS, allUsersVerificationApplications });

export const getUsersRequest = () => (dispatch) => {
  usersAPI.getAllUsers()
    .then(response => {
      dispatch(setUsers(response.data));
    });
};

export const getUserByIdRequest = (userId) => (dispatch) => {
  usersAPI.getUserById(userId)
    .then(response => {
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

export const addReportRequest = (userId, report, name) => (dispatch) => {
  usersAPI.addReport(userId, report, name)
    .then(() => {
      dispatch(addReport(report, name));
      dispatch(reset('comment'));
      dispatch(setSuccessSending(true));
    });
  setTimeout(() => {
    dispatch(setSuccessSending(false));
  }, 5000);
};

export const getAllReportsRequest = () => (dispatch) => {
  usersAPI.getAllReports()
    .then(response => {
      dispatch(setReports(response.data));
    });
};

export const getUserByEmailRequest = (email) => (dispatch) => {
  usersAPI.getUserByEmail(email)
    .then(response => {
      dispatch(setUserByEmail(response.data));
    });
};

export const getUserDataRequest = (id) => (dispatch) => {
  usersAPI.getUserData(id)
    .then(response => {
      dispatch(setUserData(response.data));
    });
};

export const sendAdditionalUserDataRequest = (id, bio, gender, nickname, phone, website) => (dispatch) => {
  usersAPI.addAdditionalUserData(id, bio, gender, nickname, phone, website)
    .then(() => {
      dispatch(setSuccessSending(true));
    });
  setTimeout(() => {
    dispatch(setSuccessSending(false));
  }, 5000);
};

export const getAdditionalUserDataRequest = (id) => (dispatch) => {
  usersAPI.getAdditionalUserData(id)
    .then(response => {
      dispatch(setAdditionalUserData(response.data));
    });
};

export const deleteUserRequest = (token) => (dispatch) => {
  usersAPI.deleteUser(token)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(setAdditionalUserData([]));
    });
};

export const applyUserVerificationRequest = (token, category, country, general, wikiArticle, website, socialNetworks) => (dispatch) => {
  usersAPI.applyUserVerification(token, category, country, general, wikiArticle, website, socialNetworks);
};

export const getAllUsersVerificationApplicationsRequest = () => (dispatch) => {
  verificationAPI.getAllUsersVerificationApplications()
    .then(response => {
      console.log(response)
      dispatch(setAllUsersVerificationApplications(response.data));
    });
};
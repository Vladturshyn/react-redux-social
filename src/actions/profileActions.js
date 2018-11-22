import axios from 'axios';

import {GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER} from './types';

// get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => 
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
}

//set profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE,
    }
}

// create profile
export const createProfile = (profileData, history) => dispatch => {
    axios
        .post('api/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

// delete profile
export const deleteProfile = () => dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone!')){
        axios
            .delete('api/profile')
            .then(res=>{
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            })
            .catch(err=>{
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            })
    }
}

// add profile experience
export const addExperience = (expData, history) => dispatch => {
    axios
        .post('/api/profile/experience', expData)
        .then(res=> history.push('/dashboard'))
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

// delete profile experience by education id
export const deleteExperience = (id) => dispatch => {
    axios
        .delete(`/api/profile/experience/${id}`)
        .then(res=> {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
         })
}

// add profile education
export const addEducation = (eduData, history) => dispatch => {
    axios
        .post('/api/profile/education', eduData)
        .then(res=> history.push('/dashboard'))
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

// delete profile education by education id
export const deleteEducation= (id) => dispatch => {
    axios
        .delete(`/api/profile/education/${id}`)
        .then(res=> {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
         })
}
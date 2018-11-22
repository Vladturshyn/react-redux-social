import axios from 'axios';

import { GET_ERRORS } from './types';

export const addExperience = (expData, history) => dispatch => {
    axios
        .post('/api/profile/experience', expData)
        .then(res=> history.push('/dashboard'))
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
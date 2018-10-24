import fetch from 'isomorphic-unfetch'
export const FETCH_USERS = 'FETCH_USERS';
export const ERROR = 'ERROR';

const baseURL = 'https://react-ssr-api.herokuapp.com';

export const fetchUsersAction = (req) => {
    console.log('fired actin', baseURL + '/users')
    const url = baseURL + '/users';
    return async (dispatch) => {
        await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            //   cookie: '' 
            },
            // body: JSON.stringify({ hungry: true })
          })
            // .then((data) => {
            //     return data.json()
            // })
            .then((res) => {
                dispatch({
                    type: FETCH_USERS,
                    payload: res,
                    nothing: false,
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err,
                    nothing: true
                })
            })

    }
    // const res = await api.get('/users')
    // .then(response => {
    //     dispatch({
    //         type: FETCH_USERS,
    //         payload: response
    //     })
    // })
    // .catch(err => {
    //     dispatch({
    //         type: ERROR,
    //         payload: err
    //     })
    // })
};

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const fetchCurrentUser = () => async (dispatch) => {
    await fetch(baseURL + '/current_user')
        .then((data) => {
            return data.json()
        })
        .then((res) => {
            dispatch({
                type: FETCH_CURRENT_USER,
                payload: res,
                nothing: false,
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err,
                nothing: true
            })
        })
    // const res = await api.get('/current_user')

    // .then(response => {
    //     dispatch({
    //         type: FETCH_CURRENT_USER,
    //         payload: response
    //     })
    // })
    // .catch(err => {
    //     dispatch({
    //         type: ERROR,
    //         payload: err
    //     })
    // })
};

export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchAdminsAction = () => async (dispatch) => {
    await fetch(baseURL + '/admins')
        .then((data) => {
            return data.json()
        })
        .then((res) => {
            dispatch({
                type: FETCH_ADMINS,
                payload: res,
                nothing: false,
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err,
                nothing: true
            })
        })
    // const res = await api.get('/admins')
    //     .then(response => {
    //         dispatch({
    //             type: FETCH_ADMINS,
    //             payload: response
    //         })
    //     })
    // .catch(err => {
    //     dispatch({
    //         type: ERROR,
    //         payload: err
    //     })
    // })
}
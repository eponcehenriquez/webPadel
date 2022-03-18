import {
    CANCHAS_SELECT_DAY,
    // CANCHAS_CREATE_FAIL,
    // CANCHAS_CREATE_REQUEST,
    // CANCHAS_CREATE_SUCCESS,
    CANCHAS_LIST_FAIL,
    CANCHAS_LIST_REQUEST,
    CANCHAS_LIST_SUCCESS,
    // CANCHAS_UPDATE_FAIL,
    // CANCHAS_UPDATE_REQUEST,
    // CANCHAS_UPDATE_SUCCESS,
    // CANCHAS_DELETE_FAIL,
    // CANCHAS_DELETE_REQUEST,
    // CANCHAS_DELETE_SUCCESS
} from './types'


export const SelectDay = ({ cancha, Day }) => {
    const date  = Day
    const day   = Day.getDate()
    const month = Day.getMonth() + 1
    const year  = Day.getFullYear()

    const data  = {
        date,
        day,
        month,
        year
    }

    return ({
        type: CANCHAS_SELECT_DAY,
        payload: {
            cancha,
            data
        }
    })
}


// CREATE ACTIONS
// export const CanchaCreateFail = () => ({
//     type: CANCHAS_CREATE_FAIL,
// })

// export const CanchaCreateRequest = (data) => ({
//     type: CANCHAS_CREATE_REQUEST,
//     payload: data
// })

// export const CanchaCreateSuccess = () => ({
//     type: CANCHAS_CREATE_SUCCESS,
// })


// LIST ACTIONS
export const CanchaListFail = () => ({
    type: CANCHAS_LIST_FAIL,
})

export const CanchaListRequest = () => ({
    type: CANCHAS_LIST_REQUEST,
})

export const CanchaListSuccess = (data) => ({
    type: CANCHAS_LIST_SUCCESS,
    payload: data
})


// UPDATE ACTIONS
// export const CanchaUpdateFail = () => ({
//     type: CANCHAS_UPDATE_FAIL,
// })

// export const CanchaUpdateRequest = (data) => ({
//     type: CANCHAS_UPDATE_REQUEST,
//     payload: data
// })

// export const CanchaUpdateSuccess = () => ({
//     type: CANCHAS_UPDATE_SUCCESS,
// })


// DELETE ACTIONS
// export const CanchaDeleteFail = () => ({
//     type: CANCHAS_DELETE_FAIL,
// })

// export const CanchaDeleteRequest = (data) => ({
//     type: CANCHAS_DELETE_REQUEST,
//     payload: data
// })

// export const CanchaDeleteSuccess = () => ({
//     type: CANCHAS_DELETE_SUCCESS,
// })
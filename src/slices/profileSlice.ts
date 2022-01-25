import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ProfileService } from '../services/ProfileService'
import { Dispatch } from 'redux'

const initialState: IProfile = {
    id: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    profile_image: ''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IProfile>) => action.payload
    }
})

export const setProfileThunk = (dispatch: Dispatch<any>) => {
    return async (id: string, type: string) => {
        switch(type) {
            case "student": 
                const student = await ProfileService.getStudent(id);
                dispatch(setProfile(student))
                break;
            case "teacher": 
                const teacher = await ProfileService.getTeacher(id);
                dispatch(setProfile(teacher))
                break;
        }
    }
}

export const { setProfile } = profileSlice.actions;

export const profileSelector = (state: RootState) => state.profile;

export default profileSlice.reducer;


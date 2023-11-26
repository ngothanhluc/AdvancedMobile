import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Specialty {
    key: string;
    name: string;
}
interface SpecialtyState {
    specialties: Specialty[];
}

const initialState: SpecialtyState = {
    specialties: [],
};

export const specialtySlice = createSlice({
    name: "specialties",
    initialState,
    reducers: {
        setSpecialties: (
            state,
            action: PayloadAction<{
                specialties: Specialty[];
            }>
        ) => {
            state.specialties = action.payload.specialties;
        },
    },
});
export const { setSpecialties } = specialtySlice.actions;
export default specialtySlice.reducer;

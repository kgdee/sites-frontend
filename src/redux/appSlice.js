import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  loading: false,
  error: null,
} 
export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      return { ...state, loading: action.payload }
    },
    setError: (state, action) => {
      return { ...state, error: action.payload }
    },
    clearError: (state) => {
      return { ...state, error: null }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, setError, clearError } = appSlice.actions

export default appSlice.reducer
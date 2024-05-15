import { createSlice } from '@reduxjs/toolkit'
import { globe } from "../assets"

const initialState = { 
  apps: [
    { id: 1, name: 'Calendar', icon: globe },
    { id: 2, name: 'Contacts', icon: globe },
    { id: 3, name: 'Notes', icon: globe },
    { id: 4, name: 'Camera', icon: globe },
    { id: 5, name: 'Maps', icon: globe },
    // Add more apps as needed
  ]
} 
export const appsSlice = createSlice({
  name: 'apps',
  initialState: initialState,
  reducers: {
    setApps: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetApps: () => {
      return initialState
    },
    searchApps: (state, action) => {
      const filtered = initialState.apps.filter(app => app.name.toLowerCase().includes(action.payload.toLowerCase()))
      return { ...state, apps: filtered }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setApps, resetApps, searchApps } = appsSlice.actions

export default appsSlice.reducer
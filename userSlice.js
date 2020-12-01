import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' }
]

const user = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default userSlice.reducer
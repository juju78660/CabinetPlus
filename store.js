import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    user: userReducer
  }
})
import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  fetchMeUser,
  registerPartner,
  loginPartner,
  fetchMePartner,
  logout,
} from "./authThunks";

const initialState = {
  user: null,
  role: null, // "user" | "partner"
  loading: false,
  error: null,
  isAuthenticated: false,
};

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       // ================= COMMON =================
//       .addMatcher(
//         (action) => action.type.endsWith("/pending"),
//         (state) => {
//           state.loading = true;
//           state.error = null;
//         }
//       )

//       .addMatcher(
//         (action) => action.type.endsWith("/fulfilled"),
//         (state) => {
//           state.loading = false;
//         }
//       )

//       .addMatcher(
//         (action) => action.type.endsWith("/rejected"),
//         (state, action) => {
//           state.loading = false;
//           state.error = action.payload || "Something went wrong";
//         }
//       )

//       // ================= USER =================
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.role = "user";
//         state.isAuthenticated = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.role = "user";
//         state.isAuthenticated = true;
//       })
//       .addCase(fetchMeUser.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.role = "user";
//         state.isAuthenticated = true;
//       })

//       // ================= PARTNER =================
//       .addCase(registerPartner.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.role = "partner";
//         state.isAuthenticated = true;
//       })
//       .addCase(loginPartner.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.role = "partner";
//         state.isAuthenticated = true;
//       })
//       .addCase(fetchMePartner.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.role = "partner";
//         state.isAuthenticated = true;
//       })

//       // ================= LOGOUT =================
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//         state.role = null;
//         state.isAuthenticated = false;
//       });
//   },
// });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ================= USER =================
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = "user";
        state.isAuthenticated = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = "user";
        state.isAuthenticated = true;
      })
      .addCase(fetchMeUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = "user";
        state.isAuthenticated = true;
      })

      // ================= PARTNER =================
      .addCase(registerPartner.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = "partner";
        state.isAuthenticated = true;
      })
      .addCase(loginPartner.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = "partner";
        state.isAuthenticated = true;
      })
      .addCase(fetchMePartner.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.role = "partner";
        state.isAuthenticated = true;
      })

      // ================= LOGOUT =================
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.role = null;
        state.isAuthenticated = false;
      })

      // ================= COMMON =================
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload || "Something went wrong";
        }
      );
  },
});


export default authSlice.reducer;

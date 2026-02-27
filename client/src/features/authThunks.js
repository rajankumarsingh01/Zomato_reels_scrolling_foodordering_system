import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

// ================= USER =================
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/user/register", data);
      return { user: res.data.user, role: "user" };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/user/login", data);
      return { user: res.data.user, role: "user" };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

// export const fetchMeUser = createAsyncThunk(
//   "auth/fetchMeUser",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await api.get("/auth/me/user");
//       return { user: res.data.user, role: "user" };
//     } catch {
//       return rejectWithValue(null);
//     }
//   }
// );
export const fetchMeUser = createAsyncThunk(
  "auth/fetchMeUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/auth/me/user", { withCredentials: true });
      return { user: res.data.user, role: "user" };
    } catch (err) {
      if (err.response?.status === 401) return rejectWithValue(null); // silent fail
      return rejectWithValue(err.response?.data?.message);
    }
  }
);



// ================= FOOD PARTNER =================
export const registerPartner = createAsyncThunk(
  "auth/registerPartner",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/food-partner/register", data);
      return { user: res.data.foodPartner, role: "partner" };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

export const loginPartner = createAsyncThunk(
  "auth/loginPartner",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/food-partner/login", data);
      return { user: res.data.foodPartner, role: "partner" };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

export const fetchMePartner = createAsyncThunk(
  "auth/fetchMePartner",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/auth/me/food-partner");
      return { user: res.data.foodPartner, role: "partner" };
    } catch {
      return rejectWithValue(null);
    }
  }
);

// ================= LOGOUT =================
export const logout = createAsyncThunk("auth/logout", async () => {
  await api.get("/auth/user/logout"); // same cookie
  return true;
});

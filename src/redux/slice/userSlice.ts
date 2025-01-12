import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance"; // Adjust the path for axiosInstance

// Define Types
interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
}

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

// Async Thunk for Fetching Users
export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    "user/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("user/users");
            return response.data; // Assuming response.data is an array of users
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
        }
    }
);

// Slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(fetchUsers.pending, (state: UserState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state: UserState, action: PayloadAction<User[]>) => {
                console.log("action.payload", action.payload)

                const { data } = action.payload


                state.loading = false;
                state.users = data || [];
            })
            .addCase(fetchUsers.rejected, (state: UserState, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch users";
            });
    },
});

export default userSlice.reducer;

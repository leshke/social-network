const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '25e27125-64ca-4266-a443-51cffa91f86c'
    }
});

export const userAPI = {
    getUsersFromServer: (currentPage, pageSize) => instance.get(`users?page=${currentPage}&count=${pageSize}`),
    getFriendsFromServer: (currentPage, pageSize) => instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${true}`),
    getSearchedUser: (user,pageSize) => instance.get(`users?term=${user}&count=${pageSize}`),
    followUser: (userId) => instance.post(`follow/${userId}`),
    unfollowUser: (userId) => instance.delete(`follow/${userId}`),
}

export const headerAPI = {
    getAuth: () => instance.get(`auth/me`),
    login: (email, password, rememberMe, captcha) => instance.post(`auth/login`, { email, password, rememberMe, captcha }),
    logout: () => instance.delete(`auth/login`),
}

export const profileAPI = {
    getProfile: (userId) => instance.get(`profile/${userId}`),
    getProfileStatus: (userId) => instance.get(`profile/status/${userId}`),
    updateProfileStatus: (status) => instance.put(`profile/status`, { status: status }),
    sendProfilePhoto: (photoFile) => {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData)
    },
    sendProfileInfo: (profile) => instance.put(`profile`, profile),
}

export const securityAPI = {
    getCaptchaUrl: () => instance.get(`security/get-captcha-url`),
}

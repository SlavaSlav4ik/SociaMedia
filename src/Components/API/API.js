import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '8b85ad00-0f2f-45c0-ace3-1efee3f9809f' }
});

export const usersAPI = {
    getUsers: (page = 1, count = 10, term = '', friend = null) =>
        instance.get('users', { params: { page, count, term, friend } }).then(res => res.data),
    follow: id => instance.post(`follow/${id}`),
    unfollow: id => instance.delete(`follow/${id}`)
};

export const profileAPI = {
    getProfile: id => instance.get(`profile/${id}`),
    getStatus: id => instance.get(`profile/status/${id}`),
    updateStatus: status => instance.put('profile/status', { status }),
    savePhoto: file => {
        const form = new FormData(); form.append('image', file);
        return instance.put('profile/photo', form, { headers: { 'Content-Type': 'multipart/form-data' } });
    },
    saveProfile: data => instance.put('profile', data)
};

export const authAPI = {
    me: () => instance.get('auth/me'),
    login: (email, password, rememberMe) => instance.post('auth/login', { email, password, rememberMe }),
    logout: () => instance.delete('auth/login')
};

export const dialogsAPI = {
    getDialogs: () => instance.get('dialogs'),
    getMessages: id => instance.get(`dialogs/${id}/messages`),
    sendMessage: (id, body) => instance.post(`dialogs/${id}/messages`, { body })
};
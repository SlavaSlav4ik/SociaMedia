import axios from "axios";
import header from "../Header/Header";
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "8b85ad00-0f2f-45c0-ace3-1efee3f9809f"
    },
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term = "") {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
            .then(response => response.data);
    }
,
    follow (usersID) {
      return   instance.post(`follow/${usersID}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "8b85ad00-0f2f-45c0-ace3-1efee3f9809f"
            }
        })
    },
    unfollow (usersID) {
     return    instance.delete(`follow/${usersID}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "8b85ad00-0f2f-45c0-ace3-1efee3f9809f"
            }
        })
    },
    getProfile (usersID) {
        console.log ("Obsolete method. Please profileAPI object")
        return  profileAPI.getProfile(usersID)
    },

}

export const profileAPI = {
    getProfile(usersID) {
        return instance.get(`profile/${usersID}`);
    },
    getStatus(usersID) {
        return instance.get("profile/status/" + usersID);
    },
    updateStatus(status) {
        return instance.put("profile/status/", { status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },
    saveProfile(profileData) {
        return instance.put("profile", {
            fullName: profileData.fullName,
            aboutMe: profileData.aboutMe,
            lookingForAJob: profileData.lookingForAJob,
            lookingForAJobDescription: profileData.lookingForAJobDescription,
            contacts: profileData.contacts
        });
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe });
    },
    logout() {
        return instance.delete('auth/login');
    }
};

export const dialogsAPI = {
    getDialogs() {
        return instance.get('dialogs');
    },
    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`);
    },
    sendMessage(userId, message) {
        return instance.post(`dialogs/${userId}/messages`, { body: message });
    }
};


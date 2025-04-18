import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "8b85ad00-0f2f-45c0-ace3-1efee3f9809f"
    },
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
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
    }
}


export const profileAPI = {
    getProfile (usersID) {
        return  instance.get(`profile/${usersID}`)
    },
    getStatus (usersID) {
        return instance.get("profile/status/" + usersID)
    },
    updateStatus(status) {
        return instance.put("profile/status/", { status });
    }
}

export const authAPI = {
    me () {
        return         instance.get(`auth/me`, )

    }

}
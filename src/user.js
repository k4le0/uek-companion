import Firebase from "./firebase";

export default class User {

    static setUser(user) {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    static updateUser(updates) {
        Firebase.auth.currentUser.updateProfile(updates).catch((error) => alert(error))
    }

    static getUser() {
        return JSON.parse(sessionStorage.getItem('user'));
    }
}
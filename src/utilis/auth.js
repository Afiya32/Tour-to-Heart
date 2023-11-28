
import axiosSecure from '.'
export const saveUser = async (user) => {
    const currentUser = {
        email: user.email,
        name:user.displayName,
        role:'admin',
        satus:'verified',
        image:user.photoURL

    }
    const{data}= await axiosSecure.put(`/users/${user?.email}/`,currentUser)
    return data;
}
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState();
    const [adminLoading, setAdminLoading] = useState(false)
    useEffect(() => {
        if (user) {
            const email = user.email;
            fetch(`http://localhost:5000/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        const admin = data[0]?.role === 'admin'
                        setAdmin(admin)
                        setAdminLoading(true)
                    }
                })
        }
    }, [user, admin])
    return [admin, adminLoading]
}
export default useAdmin;
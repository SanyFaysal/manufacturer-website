import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (user) {
            const email = user.email;
            const name = user.displayName;
            const currentUser = { email: email, name: name };
            fetch(`https://limitless-brook-51245.herokuapp.com/user/${email}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getIem('accessToken')}`,
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token]
}
export default useToken;
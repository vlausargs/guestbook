import { Roboto_Mono } from 'next/font/google'
import { createUser, login } from '@/guestbook/network'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/guestbook/store/auth'
import { shallow } from 'zustand/shallow'
import { useRouter } from 'next/router'

const roboto = Roboto_Mono({ subsets: ['latin'] })

const Page = () => {
    const router = useRouter()
    const [identity, setidentity] = useState('')
    const [password, setpassword] = useState('')
    const [token, setToken] = useAuthStore(
        (state) => [state.token, state.setToken],
        shallow
    )

    const submit = async (e) => {
        // createUser("usertest3", "a3@a.com", "name1", "asdqwe123");
        e.preventDefault()
        var res = await login(identity, password)
        if (res?.status != 200) return alert(res?.data?.message)
        setToken(res.data.token)
        router.replace('/admin')
    }
    return (
        <div
            className={
                roboto.className +
                ' mx-auto flex h-screen w-60 flex-col justify-center'
            }
        >
            <form onSubmit={(e) => submit(e)}>
                <div className="mb-2 flex flex-col">
                    <span>Username/Email</span>
                    <input
                        className="border-2 border-black"
                        name="username"
                        onChange={(e) => setidentity(e.target.value)}
                    />
                </div>
                <div className="mb-2 flex flex-col">
                    <span>password</span>
                    <input
                        className="border-2 border-black"
                        name="password"
                        type="password"
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>
                <button
                    className="mb-2 flex justify-center rounded-lg bg-slate-500 p-2 shadow-lg"
                    type="submit"
                >
                    login
                </button>
            </form>
        </div>
    )
}
export default Page

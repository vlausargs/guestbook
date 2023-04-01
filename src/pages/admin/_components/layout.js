import { useAuthStore } from '@/guestbook/store/auth'
import { Roboto_Mono } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'
const roboto = Roboto_Mono({ subsets: ['latin'] })

const Layout = ({ children }) => {
    const [token, user, setUser, clearData] = useAuthStore(
        (state) => [state.token, state.user, state.setUser, state.clearData],
        shallow
    )
    const router = useRouter()
    const [isHydrated, setHydrated] = useState(false)
    useEffect(() => setHydrated(true), [])
    useEffect(() => {
        if (isHydrated == true && (!user?.email || token == ''))
            router.replace('/login')
    }, [token, user])
    return (
        <div
            className={
                roboto.className +
                ' flex min-h-screen w-fit min-w-full flex-col'
            }
        >
            <div className="mx-auto mt-4 text-3xl font-extrabold">
                ADMIN PANEL
            </div>
            <div className="flex flex-row pt-10">
                <div className="fixed flex h-[calc(75vh)] w-[calc(100vw/7)] flex-col border bg-slate-200 text-lg ">
                    <div className="mt-4 flex flex-row px-4 font-black">
                        MENU
                    </div>
                    <div className="mt-2 border-spacing-6 border border-gray-800"></div>
                    <button
                        className="mt-auto flex flex-row px-4 font-black hover:underline"
                        onClick={() => {
                            router.push('/admin/guestbook')
                        }}
                    >
                        Manage GuestBook
                    </button>
                    <button
                        className="mb-auto mt-2 flex flex-row px-4 font-black  hover:underline"
                        onClick={() => {
                            router.push('/admin/manage')
                        }}
                    >
                        Manage Admin
                    </button>
                    <button className="flex flex-row font-black"></button>
                </div>
                <div className="mr-auto ml-[calc(100vw/4)] flex w-full max-w-[calc(100vw/2)] flex-col break-words ">
                    {children}
                </div>
                <div className=" fixed inset-x-[80vw] flex h-[200px] w-[300px] flex-col bg-slate-300 p-10 shadow-xl">
                    <div className="flex text-lg ">
                        {'Logged in as '}
                        {router.isReady ? user?.email : null}
                    </div>

                    <button
                        className="mt-auto flex flex-row text-lg font-black hover:underline"
                        onClick={() => {
                            clearData()
                            router.replace('/login')
                        }}
                    >
                        logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Layout

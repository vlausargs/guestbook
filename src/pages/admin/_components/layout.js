import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'] })

const Layout = ({ children }) => {
    return (
        <div
            className={
                roboto.className +
                ' flex min-h-screen w-fit min-w-full flex-col'
            }
        >
            <div className="mx-auto mt-4 text-3xl font-extrabold">
                SIMPLE GUESTBOOK
            </div>
            <div className="flex flex-row pt-10">
                <div className="mr-auto ml-[calc(100vw/4)] flex w-full max-w-[calc(100vw/2)] flex-col break-words ">
                    {children}
                </div>
                <div className="fixed inset-x-[80vw] h-[200px] w-[300px] bg-slate-300 p-10 shadow-xl">
                    <div className="flex text-lg font-extrabold">
                        "Thank You
                        <br />
                        for filling our Guest Book"
                        <br />- Vivaldy A.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout

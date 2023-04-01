import { useEffect, useState } from 'react'

const ModalCreate = ({ createUser, setShowModal }) => {
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [password, setPassword] = useState('')
    const [validPassword, setvalidPassword] = useState(true)
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [validPasswordConfirm, setValidPasswordConfirm] = useState(true)

    const validateEmail = function (email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        setValidEmail(regex.test(email))
    }
    const validatePassword = function (password) {
        setvalidPassword(password.length >= 10)
    }
    const validatePasswordConfirm = function (passwordConfirm) {
        setValidPasswordConfirm(passwordConfirm == password)
    }
    useEffect(() => {
        validatePasswordConfirm(passwordConfirm)
    }, [passwordConfirm, password])

    const createAdmin = function () {
        if (validEmail && validPassword && validPasswordConfirm)
            createUser(email, password)
        // console.log('create')
    }
    return (
        <>
            <div className="fixed inset-0 z-40 h-screen w-screen bg-gray-400 opacity-75"></div>
            <div className=" fixed inset-0 z-50 flex justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                <div className="relative my-auto mx-auto w-[80vw]">
                    <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                            <h3 className="font=semibold text-3xl">
                                GuestBook Detail
                            </h3>
                            <button
                                className="float-right border-0 bg-transparent text-black"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="opacity-7 block h-6 w-6 rounded-full bg-gray-400 py-0 text-xl text-black">
                                    x
                                </span>
                            </button>
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                createAdmin()
                            }}
                        >
                            <div className="relative w-full flex-auto rounded bg-gray-200 p-6 px-8 pt-6 pb-8 shadow-md">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <label className="mb-1 block text-sm font-bold text-black">
                                            email
                                        </label>
                                        {!validEmail && (
                                            <label className="ml-10 mb-1 block text-sm font-bold text-red-500">
                                                invalid email
                                            </label>
                                        )}
                                    </div>
                                    <input
                                        type="email"
                                        className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            validateEmail(e.target.value)
                                        }}
                                        required
                                    />
                                </div>
                                <div className="flex flex-row">
                                    <label className="mb-1 block text-sm font-bold text-black">
                                        password
                                    </label>
                                    {!validPassword && (
                                        <label className="ml-10 mb-1 block text-sm font-bold text-red-500">
                                            password must be 10 characther
                                        </label>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        validatePassword(e.target.value)
                                    }}
                                    required
                                />
                                <div className="flex flex-row">
                                    <label className="mb-1 block text-sm font-bold text-black">
                                        password confirm
                                    </label>
                                    {!validPasswordConfirm && (
                                        <label className="ml-10 mb-1 block text-sm font-bold text-red-500">
                                            password not match
                                        </label>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                                    onChange={(e) => {
                                        setPasswordConfirm(e.target.value)
                                        validatePasswordConfirm(e.target.value)
                                    }}
                                    required
                                />
                            </div>
                            <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                                <button
                                    type="submit"
                                    className="rounded-lg bg-blue-400 p-2 shadow-md shadow-gray-500 hover:bg-blue-500"
                                >
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCreate

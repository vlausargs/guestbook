import moment from 'moment'
import React from 'react'

const ModalViewDetail = ({ item, setShowModal }) => {
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
                        <div className="relative w-full flex-auto rounded bg-gray-200 p-6 px-8 pt-6 pb-8 shadow-md">
                            <label className="mb-1 block text-sm font-bold text-black">
                                id
                            </label>
                            <input
                                disabled
                                className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                                value={item.id}
                            />
                            <label className="mb-1 block text-sm font-bold text-black">
                                name
                            </label>
                            <input
                                disabled
                                className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                                value={item.name}
                            />
                            <label className="mb-1 block text-sm font-bold text-black">
                                comment
                            </label>
                            <textarea
                                disabled
                                className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                                value={item.comment}
                                rows="5"
                            />
                            <label className="mb-1 block text-sm font-bold text-black">
                                created_at
                            </label>
                            <input
                                disabled
                                className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                                value={
                                    item.created +
                                    ' (' +
                                    moment(item.created).fromNow() +
                                    ')'
                                }
                            />
                        </div>
                        <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalViewDetail

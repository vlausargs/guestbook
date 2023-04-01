import { deleteReply } from '@/guestbook/network'
import { useAuthStore } from '@/guestbook/store/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const TableView = ({ data, setData, showModal }) => {
    const [token] = useAuthStore((state) => [state.token])
    const [isHydrated, setHydrated] = useState(false)
    const router = useRouter()
    useEffect(() => setHydrated(true), [])

    const showAction = function (item) {
        const update = data.map((obj) => {
            if (obj.id == item.id)
                return {
                    ...obj,
                    showAction: obj.showAction == true ? false : true,
                }
            return obj
        })
        setData(update)
    }
    const deleteData = async function (id) {
        await deleteReply(id, token)
        router.reload()
    }
    return (
        <table className="w-full">
            <thead className="bg-slate-300">
                <tr>
                    <td className="border px-4 py-2">id</td>
                    <td className="border px-4 py-2">name </td>
                    <td className="border px-4 py-2">comment</td>
                    <td className="border px-4 py-2">reply</td>
                    <td className="border px-4 py-2">created_at</td>
                    <td className="border px-4 py-2">action</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">
                            {item.comment.substr(0, 50)}
                            {item.comment.length > 50 ? '...' : ''}
                        </td>
                        <td className="border px-4 py-2">
                            {item.reply.length} reply
                        </td>
                        <td className="border px-4 py-2">{item.created}</td>
                        <td className="border px-4 py-2">
                            <button
                                className="bg-slate-200 px-2 hover:bg-slate-400"
                                onClick={() => {
                                    showAction(item)
                                }}
                            >
                                ...
                            </button>
                            {item?.showAction == true && (
                                <div className="fixed mt-2 flex flex-col border-4 bg-white shadow-lg">
                                    <button
                                        className="px-2 py-1 text-left"
                                        onClick={() => {
                                            showAction(item)
                                            showModal(item)
                                        }}
                                    >
                                        show detail
                                    </button>
                                    <button
                                        className="bg-red-400 px-2 py-1 text-left hover:bg-red-500"
                                        onClick={() => {
                                            if (isHydrated) deleteData(item.id)
                                        }}
                                    >
                                        delete
                                    </button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableView

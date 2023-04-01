import { deleteAdmin } from '@/guestbook/network'
import { useAuthStore } from '@/guestbook/store/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const TableView = ({ data, setData, showModal }) => {
    const [token, user] = useAuthStore((state) => [state.token, state.user])
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
        await deleteAdmin(id, token)
        router.reload()
    }
    return (
        <table className="w-full">
            <thead className="bg-slate-300">
                <tr>
                    <td className="border px-4 py-2">id</td>
                    <td className="border px-4 py-2">email </td>
                    <td className="border px-4 py-2">created_at</td>
                    <td className="border px-4 py-2">action</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.email}</td>
                        <td className="border px-4 py-2">{item.created}</td>
                        <td className="border px-4 py-2">
                            {!(!isHydrated || user?.id == item.id) && (
                                <button
                                    className="bg-red-400 px-2 py-1 text-left hover:bg-red-500"
                                    onClick={() => {
                                        if (isHydrated) deleteData(item.id)
                                    }}
                                >
                                    delete
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableView

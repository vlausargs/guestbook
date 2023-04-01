import { fetchGuestBookReply } from '@/guestbook/network'
import moment from 'moment/moment'
import { useEffect, useState } from 'react'

const Reply = ({ parentId }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const callFetchGB = async () => {
            const res = await fetchGuestBookReply(parentId)
            if (res.status != 200) return alert(res?.data?.message)
            setData(res?.data?.items)
            console.log(res.data)
        }
        callFetchGB()
    }, [parentId])

    return (
        <>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="mr-2 ml-8 mt-1 mb-2 flex flex-col bg-slate-300 p-4 shadow-lg"
                >
                    <div className="flex w-full flex-row">
                        <div className="flex flex-col text-lg font-bold">
                            {item.name}
                        </div>
                        <div className="ml-auto flex flex-col">
                            {moment(item.created).fromNow()}
                        </div>
                    </div>
                    <div className="flex flex-row"> {item.comment}</div>
                </div>
            ))}
        </>
    )
}

export default Reply

import {
    fetchGBSingle,
    fetchGuestBookReply,
    postReply,
    updateParent,
} from '@/guestbook/network'
import moment from 'moment/moment'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Reply = ({ parentId }) => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const router = useRouter()
    useEffect(() => {
        const callFetchGB = async () => {
            const res = await fetchGuestBookReply(parentId)
            if (res.status != 200) return alert(res?.data?.message)
            setData(res?.data?.items)
            console.log(res.data)
        }
        callFetchGB()
    }, [parentId])
    const handleReply = function () {
        const body = { name: name, comment: comment, parent: parentId }

        const res = postReply(body)
        res.then(async (data) => {
            const parentData = await fetchGBSingle(parentId)
            parentData.data.reply.push(data.data.id)
            await updateParent(parentId, parentData.data.reply)
            router.reload()
        })
    }
    const createNewReply = function () {
        return (
            <div className="ml-8 mr-2 mt-1 mb-2 flex flex-col bg-slate-300 p-4 shadow-lg">
                <div className="mb-2 flex flex-col">
                    <span>Name</span>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        type="text"
                        className="bg-slate-200"
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <span>Commnent</span>
                    <textarea
                        onChange={(e) => setComment(e.target.value)}
                        name="comment"
                        className="bg-slate-200"
                    />
                </div>
                <button
                    onClick={() => {
                        handleReply()
                    }}
                    className="my-2  mr-5 flex flex-row self-end rounded-md bg-blue-300 p-2 font-black shadow-md"
                >
                    reply
                </button>
            </div>
        )
    }
    return (
        <>
            {createNewReply()}
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

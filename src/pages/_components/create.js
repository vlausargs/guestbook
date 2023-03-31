import { postReply } from '@/guestbook/network'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CreateCard = () => {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const router = useRouter()

    const handleReply = function () {
        const body = { name: name, comment: comment }
        const res = postReply(body)
        res.then((data) => {
            router.reload()
        })
    }
    return (
        <div className="m-2 flex flex-col bg-slate-300 p-5 shadow-lg">
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
            <div className="flex flex-col">
                <button
                    onClick={() => {
                        handleReply()
                    }}
                    className="mr-5 flex flex-row self-end rounded-md bg-blue-300 p-2 font-black shadow-md"
                >
                    submit
                </button>
            </div>
        </div>
    )
}

export default CreateCard

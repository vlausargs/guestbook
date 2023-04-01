import { useState } from 'react'
import Reply from './reply'
import moment from 'moment/moment'
import CreateReply from './createReply'

const GuestList = ({ item }) => {
    const [openReply, setOpenReply] = useState(false)
    return (
        <>
            <div className="mx-2 mt-2 flex flex-col bg-slate-300 p-4 shadow-lg">
                <div className="flex w-full flex-row">
                    <div className="flex flex-col text-lg font-bold">
                        {item.name}
                    </div>
                    <div className="ml-auto flex flex-col">
                        {moment(item.created).fromNow()}
                    </div>
                </div>
                <div className="flex flex-row"> {item.comment}</div>
                <div
                    className="mt-4 flex w-28 flex-row font-bold underline "
                    onClick={() => setOpenReply(!openReply)}
                >
                    {item.reply.length} comments
                </div>
            </div>
            {openReply && (
                <>
                    <CreateReply parentId={item.id} />
                    <Reply parentId={item.id} />
                </>
            )}
        </>
    )
}

export default GuestList

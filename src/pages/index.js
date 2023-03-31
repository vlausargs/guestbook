import { Roboto_Mono } from 'next/font/google'
import Layout from './_components/layout'
import { useEffect, useState } from 'react'
import { fetchGuestBook } from '@/guestbook/network'
import CustomPagination from '@/guestbook/components/pagination'
import GuestList from './_components/guestList'
import CreateCard from './_components/create'

const roboto = Roboto_Mono({ subsets: ['latin'] })

const Page = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [records, setRecords] = useState(2)
    const [sort, setSort] = useState('-created')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        const callFetchGB = async () => {
            const res = await fetchGuestBook(page, records, sort, filter)
            if (res.status != 200) return alert(res?.data?.message)
            setData(res?.data?.items)
            setTotalPage(res?.data?.totalPages)
            console.log(res.data)
        }
        callFetchGB()
    }, [page, records, sort, filter])
    return (
        <div className="flex flex-col">
            <CreateCard />
            {data.map((item) => (
                <GuestList key={item.id} item={item} />
            ))}
            {totalPage && (
                <CustomPagination
                    currPage={page}
                    totalPage={totalPage}
                    setPage={(page) => {
                        setPage(page)
                    }}
                />
            )}
        </div>
    )
}

Page.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default Page

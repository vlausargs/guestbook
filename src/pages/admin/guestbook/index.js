import { useEffect, useState } from 'react'
import Layout from '../_components/layout'
import { fetchGuestBook } from '@/guestbook/network'
import CustomPagination from '@/guestbook/components/pagination'
import TableView from './_components/tableView'
import ModalViewDetail from './_components/modalViewDetail'

const Page = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [records, setRecords] = useState(10)
    const [sort, setSort] = useState('-created')
    const [filter, setFilter] = useState('')

    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState({})
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
            {showModal ? (
                <ModalViewDetail
                    item={selected}
                    setShowModal={(val) => {
                        setShowModal(val)
                    }}
                />
            ) : null}
            <TableView
                data={data}
                setData={(update) => {
                    setData(update)
                }}
                showModal={(item) => {
                    setSelected(item)
                    setShowModal(true)
                }}
            />
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

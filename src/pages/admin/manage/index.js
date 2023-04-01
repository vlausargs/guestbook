import { useEffect, useState } from 'react'
import Layout from '../_components/layout'
import CustomPagination from '@/guestbook/components/pagination'
import TableView from './_components/tableView'
import { createUser, fetchAdmins } from '@/guestbook/network'
import { useAuthStore } from '@/guestbook/store/auth'
import { useRouter } from 'next/router'
import ModalCreate from './_components/modalCreate'

const Page = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [records, setRecords] = useState(10)
    const [sort, setSort] = useState('-created')
    const [filter, setFilter] = useState('')

    const [showModal, setShowModal] = useState(false)

    const [selected, setSelected] = useState({})

    const [token] = useAuthStore((state) => [state.token])
    const [isHydrated, setHydrated] = useState(false)
    const router = useRouter()
    useEffect(() => setHydrated(true), [])
    useEffect(() => {
        const callFetchGB = async () => {
            const res = await fetchAdmins(page, records, sort, filter, token)
            if (res.status != 200) return alert(res?.data?.message)
            setData(res?.data?.items)
            setTotalPage(res?.data?.totalPages)
            console.log(res.data)
        }
        if (isHydrated) callFetchGB()
    }, [page, records, sort, filter, token])

    return (
        <div className="flex flex-col">
            {showModal ? (
                <ModalCreate
                    createUser={async (email, password) => {
                        if (isHydrated) {
                            const res = await createUser(email, password, token)
                            console.log(res.data)
                            if (res.status != 200)
                                return alert(
                                    res?.data?.data?.email?.message
                                        ? res?.data?.data?.email?.message
                                        : res?.data?.message
                                )

                            // setShowModal(false)
                            router.reload()
                        }
                    }}
                    setShowModal={(val) => {
                        setShowModal(val)
                    }}
                />
            ) : null}
            <button
                className="mb-4 flex w-32 flex-col items-center rounded-lg bg-blue-400 p-1 shadow-md shadow-gray-500 hover:bg-blue-500"
                onClick={() => {
                    setShowModal(true)
                }}
            >
                create
            </button>
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

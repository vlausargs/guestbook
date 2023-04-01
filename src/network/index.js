import apis from './fetch_api'

export const login = async (identity, password) => {
    const data = apis
        .post('/api/admins/auth-with-password', {
            identity,
            password,
        })
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}

export const fetchGuestBook = async (page, records, sort, filter) => {
    const data = apis
        .get(
            '/api/collections/guestbook/records?page=' +
                page +
                '&perPage=' +
                records +
                '&sort=' +
                sort +
                "&filter=(parent = '')" +
                filter
        )
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}

export const fetchGuestBookReply = async (parent) => {
    const data = apis
        .get(
            '/api/collections/guestbook/records?' +
                'perPage=1000' +
                '&sort=-created' +
                "&filter=(parent ='" +
                parent +
                "')"
        )
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}

export const fetchGBSingle = async (id) => {
    const data = apis
        .get('/api/collections/guestbook/records/' + id)
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}
export const updateParent = async (id, reply) => {
    const data = apis
        .patch('/api/collections/guestbook/records/' + id, { reply: reply })
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}
export const postReply = async (body) => {
    const data = apis
        .post('/api/collections/guestbook/records', body)
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}

export const deleteReply = async (id, token) => {
    const config = {
        headers: {
            Authorization: token,
        },
    }
    const data = apis
        .delete('/api/collections/guestbook/records/' + id, config)
        .catch((e) => {
            alert(e.response)
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}

export const fetchAdmins = async (page, records, sort, filter, token) => {
    const config = {
        headers: {
            Authorization: token,
        },
    }
    const data = apis
        .get(
            '/api/admins?page=' +
                page +
                '&perPage=' +
                records +
                '&sort=' +
                sort +
                '&filter=' +
                filter,
            config
        )
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}
export const deleteAdmin = async (id, token) => {
    const config = {
        headers: {
            Authorization: token,
        },
    }
    const data = apis
        .delete('/api/admins/' + id, config)
        .catch((e) => {
            alert(e.response)
            return e.response
        })
        .then((res) => {
            return res
        })

    return await data
}
export const createUser = async (email, password, token) => {
    const config = {
        headers: {
            Authorization: token,
        },
    }
    const data = await apis
        .post(
            '/api/admins',
            {
                email,
                password,
                passwordConfirm: password,
                avatar: 1,
            },
            config
        )
        .catch((e) => {
            return e.response
        })
        .then((res) => {
            return res
        })

    return data
}

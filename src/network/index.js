import apis from './fetch_api'

export const createUser = async (username, email, name, password) => {
    const data = await apis.post('/api/collections/users/records', {
        name,
        username,
        email,
        password,
        passwordConfirm: password,
    })

    return data?.data
}

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

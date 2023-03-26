import apis from "./fetch_api";

export const createUser = async (username, email, name, password) => {
  const data = await apis.post("/api/collections/users/records", {
    name,
    username,
    email,
    password,
    passwordConfirm: password,
  });

  return data?.data;
};

export const login = async (identity, password) => {
  const data = apis
    .post("/api/collections/users/auth-with-password", {
      identity,
      password,
    })
    .catch((e) => {
      return e.response;
    })
    .then((res) => {
      return res;
    });

  return await data;
};

export const fetchGuestBook = async (page, records, sort, filter) => {
  const data = apis
    .get(
      "/api/collections/guestbook/records?page=" +
        page +
        "&perPage=" +
        records +
        "&sort=" +
        sort +
        "&filter=" +
        filter
    )
    .catch((e) => {
      return e.response;
    })
    .then((res) => {
      return res;
    });

  return await data;
};

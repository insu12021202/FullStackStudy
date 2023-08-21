export const setPersonalInfo = async (page) => {
    const response = await axios.get("/api/getUserList", page);

    return response.data;
};

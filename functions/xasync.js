module.exports = async (data) => {
    if(data.test) {
        data.test = 200;
    }
    return data;
}


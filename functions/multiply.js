module.exports = (data,args) => {
    if(data.test) {
        data.test = data.test * 2;
    }
    return data;
}

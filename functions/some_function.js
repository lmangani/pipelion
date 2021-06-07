module.exports = (data, args) => {
  var parameter = args.name;
    if(data.test) {
      if(data)
        data.test = data.test * 2;
        data.param = parameter;
    }
    return data;
}

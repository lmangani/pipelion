module.exports = (data, args) => {
  for(let item of args) {
    data[item.name] = item.value.value;
  }
  if(data.test) {
    if(data)
      data.test = data.test * 2;
  }
  return data;
}

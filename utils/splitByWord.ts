const splitByWord = (str: string) => str.replace(/\s/g, " #").split("#")

export default splitByWord

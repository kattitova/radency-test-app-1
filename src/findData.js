export const findData = (txt) => {
    const regex = /\d{1,2}([\\/.-])\d{1,2}\1\d{4}/g;
    return txt.match(regex);
}
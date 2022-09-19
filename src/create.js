export const create = (elem, cls, txt, parent) => {
    const createElem = document.createElement(elem);
    createElem.className = cls;
    createElem.innerHTML = txt;
    parent.appendChild(createElem);
};
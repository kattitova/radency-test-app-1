import { tableTitle, notes } from './data.js';
import { create } from './create.js';
import { findData } from "./findData.js";

export const createTable = () => {
    const root = document.getElementById('root');
    const table = document.createElement('div');
    table.className = 'notes-table';
    root.appendChild(table);

    tableTitle.forEach((item, ind) => {
        if (ind === 0) create('div', 'title category-ico', '', table);
        create('div', `title ${item}`, item, table);
    });

    notes.forEach(item => {
        Object.keys(item).forEach((note, ind) => {
            if (ind === 0) {
                create('div', `table-content category-ico ${item.category}`, '', table);
            }
            if (note === 'dates') create('div', `table-content ${note}`, findData(item.content), table);
            else create('div', `table-content ${note}`, item[note], table);
        });
    });

};
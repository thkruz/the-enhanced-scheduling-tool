import { saveAs } from 'file-saver';

export const saveCsv = (items, name = 'data') => {
  try {
    const replacer = value => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(items[0]);
    let csv = items.map(row => header.map(fieldName => JSON.stringify(replacer(row[fieldName]))).join(','));
    csv.unshift(header.join(','));
    csv = csv.join('\r\n');

    const blob = new Blob([csv], { type: 'text/plain;charset=utf-8' });
    if (!saveAs) throw new Error('saveAs is unavailable!');
    saveAs(blob, `${name}.csv`);
  } catch (error) {
    throw new Error(error);
  }
};

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Контактів для видалення немає.');
    return;
  }

  contacts.pop();
  return await writeContacts(contacts);
};

removeLastContact();

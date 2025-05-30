import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {};

let prevContacts = await readContacts();
let newContact = createFakeContact();
prevContacts.push(newContact);

try {
  await writeContacts(prevContacts);
} catch (error) {
  console.log(error);
}

addOneContact();

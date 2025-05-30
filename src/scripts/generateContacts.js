import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  let prevContacts = await readContacts();

  for (let i = 1; i <= number; i++) {
    let newContact = createFakeContact();
    prevContacts.push(newContact);
  }

  try {
    await writeContacts(prevContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);

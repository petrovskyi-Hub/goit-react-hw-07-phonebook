import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function postContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(contactID) {
  await axios.delete(`/contacts/${contactID}`);
  return contactID;
}

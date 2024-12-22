import React, { useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import intialContacts from './assets/contacts.json';

function App() {
  const [contacts, setContacts] = useState(intialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: crypto.randomUUID(),
      name,
      number,
    };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App;

// import React from 'react';
import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useLocalStorage } from './LocalStorage/LocalStorage';

export const App = () =>{
  const [contacts, setContacts] = useLocalStorage('contacts', '')
  const [filter, setFilter] = useState('')

const AddContact = contact => {
  setContacts([...contacts, contact])
  };

const handleFilter = e => {
  setFilter(e.currentTarget.value);
  // this.setState({ filter: e.currentTarget.value });
  };

const getVisibleContact = () => {
    // const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };


const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    // }));
  };

  const visibleContact = getVisibleContact();
  return (
    <>
    <div>
      <h1>Phonebook</h1>
      <ContactForm add={AddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        visibleContact={visibleContact}
        deleteContacts={deleteContact}
      />
    </div>
  </>
);

  }







// export class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   // localStorage
// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedСontacts = JSON.parse(contacts);

//   if (parsedСontacts) {
//     this.setState({ contacts: parsedСontacts });
//   }
// }

// componentDidUpdate(prevProps,prevState){
//   if(prevState.contacts !== this.state.contacts){
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     return true;
//   }
//   return false;
// }



//   AddContact = contact => {
//     // console.log(contact)
//     this.setState(({ contacts }) => ({
//       contacts: [...contacts, contact],
//     }));
//   };


//   handleFilter = e => {
//     this.setState({ filter: e.currentTarget.value });


//   };

//   getVisibleContact = () => {
//     const { filter, contacts } = this.state;
//     const normalizeFilter = filter.toLowerCase();

//     return contacts.filter(el =>
//       el.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

// render() {
//   const { filter, contacts } = this.state;
//   const visibleContact = this.getVisibleContact();
//   return (
//     <>
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm add={this.AddContact} contacts={contacts} />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={this.handleFilter} />
//       <ContactList
//         visibleContact={visibleContact}
//         deleteContacts={this.deleteContact}
//       />
//     </div>
//   </>
// );
// }
//   }
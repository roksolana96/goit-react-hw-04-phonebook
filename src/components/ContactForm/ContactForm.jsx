// import { Component } from 'react';
import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { AddBtn, Form, Input, FormName } from './ContactForm.styled';

export const ContactForm = ({ add, contacts }) => {
  const [user, setUser] = useState({ name: '', number: '' });

  const handleChangeName = e => {
    setUser({ ...user, name: e.currentTarget.value });
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
  };

  const handleChangeNumber = e => {
    setUser({ ...user, number: e.currentTarget.value });
  };


  const handleFormSubmit = e => {
    e.preventDefault();
    const ContactId = nanoid();

    const contact = {
      name: user.name,
      id: ContactId,
      number: user.number,
    };

    if (contacts.find(item => item.name === user.name)) {
      alert(`${user.name} is already in contacts.`);
      return;
    } else if (contacts.find(item => item.number === user.number)) {
      alert(`${user.number} is already in contacts.`);
      return;
    }

    add(contact);
    resetForm();
  };

  const resetForm = () => {
    setUser({ name: '', number: '' });
  };

  return (
    <>
      <Form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          <FormName>Name</FormName>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
            value={user.name}
          />
        </label>
        <label htmlFor="number">
          <FormName>Number</FormName>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeNumber}
            value={user.number}
          />
        </label>

        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };



// export class ContactForm extends Component {
//   static propTypes = {
//     add: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   };
//   state = {
//     name: '',
//     number: '',
//   };
  
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = e => {
//     e.preventDefault();
//     // this.props.onSubmit(this.state);
//     this.reset();

//     e.preventDefault();
//     const ContactId = nanoid();
//     const { name, number } = this.state;
//     const { contacts } = this.props;
//     this.reset();

//     const contact = {
//       name: name,
//       id: ContactId,
//       number: number,
//     };
//     // console.log(this.state)

//     if (contacts.find(item => item.name === name)) {
//       alert(`${name} is already in contacts.`);
//       return;
//     } else if (contacts.find(item => item.number === number)) {
//       alert(`${number} is already in contacts.`);
//       return;
//     }

//     this.props.add(contact);
//     // this.resetForm();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
 

//   render() {
//     return (
//       <>
//         <Form action="" onSubmit={this.handleFormSubmit}>
//           <label htmlFor="name">
//             <FormName>Name</FormName>
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//               value={this.state.name}
//             />
//           </label>
//           <label htmlFor="number">
//             <FormName>Number</FormName>
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//               value={this.state.number}
//             />
//           </label>

//           <AddBtn type="submit">Add contact</AddBtn>
//         </Form>
//       </>
//     );
//   }
// }

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <span>
        <FaUser className={s.icon} /> {name}:
      </span>
      <span>
        <FaPhoneAlt className={s.icon} /> {number}
      </span>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

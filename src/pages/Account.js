import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function Account() {
    const { user } = useAuth();
    const [account, setAccount] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPicture, setEditedPicture] = useState(null);
  
    // ฟังก์ชันดึงข้อมูลบัญชีผู้ใช้
    const getAccount = () => {
      axios
        .get('http://localhost:4000/account', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setAccount(res.data);
          setEditedName(res.data.name || '');
          setEditedEmail(res.data.email || '');
          setEditedPicture(res.data.picture || '');
        })
        .catch((err) => {
          console.error('Error fetching account:', err);
        });
    };
    useEffect(() => {
      if (user && user.token) {
        getAccount();
      }
    }, [user]);

  return (
    <>
    <h1>Account</h1>
    
    </>
  );
}

export default Account;
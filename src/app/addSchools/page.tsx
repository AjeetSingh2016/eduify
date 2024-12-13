'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState<File | null>(null);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    if (image) formData.append('image', image);

    try {
      await axios.post('/api/addschool', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('School added successfully!');
    } catch (error) {
      alert('Error submitting form.');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const styles = {
    formContainer: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputField: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    errorMessage: {
      color: 'red',
      fontSize: '12px',
      marginTop: '5px',
    },
    fileInput: {
      padding: '5px',
    },
    filePreview: {
      marginTop: '10px',
      fontSize: '14px',
      color: '#555',
    },
    submitButton: {
      padding: '10px 15px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textAlign: 'center',
    },
    submitButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.formContainer}>
      <h1 style={styles.heading}>Add School</h1>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputGroup}>
          <input
            style={styles.inputField}
            {...register('name', { required: 'Name is required' })}
            placeholder="School Name"
          />
          {errors.name && <span style={styles.errorMessage}>{errors.name.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input
            style={styles.inputField}
            {...register('email_id', {
              required: 'Email is required',
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            })}
            placeholder="Email"
          />
          {errors.email_id && <span style={styles.errorMessage}>{errors.email_id.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input
            style={styles.inputField}
            {...register('contact', {
              required: 'Contact is required',
              pattern: /^[0-9]{10}$/,
            })}
            placeholder="Contact"
          />
          {errors.contact && <span style={styles.errorMessage}>{errors.contact.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input
            style={styles.inputField}
            {...register('address', { required: 'Address is required' })}
            placeholder="Address"
          />
          {errors.address && <span style={styles.errorMessage}>{errors.address.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input
            style={styles.inputField}
            {...register('city', { required: 'City is required' })}
            placeholder="City"
          />
          {errors.city && <span style={styles.errorMessage}>{errors.city.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input
            style={styles.inputField}
            {...register('state', { required: 'State is required' })}
            placeholder="State"
          />
          {errors.state && <span style={styles.errorMessage}>{errors.state.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <input style={styles.fileInput} type="file" onChange={handleImageChange} />
          {image && <p style={styles.filePreview}>{image.name}</p>}
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSchool;

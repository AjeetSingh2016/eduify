// src/app/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import styles from './page.module.css';

const HomePage = () => {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    if (page === 'addSchool') {
      router.push('/addSchools');
    } else if (page === 'showSchools') {
      router.push('/showSchools');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to the School Management System</h1>
      <p className={styles.description}>Choose an option to get started</p>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => handleNavigate('addSchool')}
          className={styles.button}
        >
          Add School
        </button>
        <button
          onClick={() => handleNavigate('showSchools')}
          className={styles.button}
        >
          Show Schools
        </button>
      </div>
    </div>
  );
};

export default HomePage;

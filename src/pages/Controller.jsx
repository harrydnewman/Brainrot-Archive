import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Controller.module.css';

export default function Controller({ showNavbar, children }) {
    return (
        <div>
            {showNavbar && (
                <div className={styles.controllerDiv}>
                    <div className={styles.navbarDiv}>
                        <Navbar />
                    </div>
                </div>
            )}
            <div className={styles.mainPageDiv}>
                {children}
            </div>
        </div>
    );
}

import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>kjsfbjkgs</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/categories${1 }`}>
              Link
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target='_blank' className={styles.link}>
          Help
        </a>
        <a href="/terms" target='_blank' className={styles.link} style={{textDecoration:'underline'}}>
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar

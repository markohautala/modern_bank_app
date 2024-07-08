import React from 'react'
import styles from './style'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    {/* NavBar goes here */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        NavBar goes here
      </div>
    </div>

    {/* Hero Section goes here */}
    <div className={` bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero Section goes here
      </div>
    </div>

    {/* Stats Section goes here */}
    <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats
        Business
        Billing
        CardDeal
        Testimonials
        Cliens
        CTA Section
        Footer
        
      </div>
    </div>
  </div>
)

export default App

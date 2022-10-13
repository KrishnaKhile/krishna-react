import React from 'react'
import { Link } from 'react-router-dom'
const Page404 = () => {
  return (
    <>
      <main>
    <div className="container">

      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <Link className="btn" to="/">Back to home</Link>
        <img src="./img/not-found.svg" className=" " alt="Page Not Found" />
        <div className="credits">
          Developed and Designed by <Link to="/">BootstrapMade</Link>
        </div>
      </section>

    </div>
  </main>
    </>
  )
}

export default Page404

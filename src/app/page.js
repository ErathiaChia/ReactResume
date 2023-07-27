import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <head>
        <title>E.E Xie - Resume</title>
        {/* favicon */}
        <link rel="icon" href="assets/Logo_V2.1.svg" />

        {/* <!-- fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&family=Saira+Stencil+One&display=swap"
        />

        {/* <!-- css libraries file --> */}
        <link rel="stylesheet" href="styles/libraries.min.css" />

        {/* <!-- bootstrap css file --> */}
        <link rel="stylesheet" href="styles/bootstrap.css" />
        {/* <!-- main style file --> */}
        <link rel="stylesheet" href="styles/main.css" />
      </head>

      <body>

      </body>
    </main>
  )
}

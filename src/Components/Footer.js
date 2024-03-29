import React from 'react'
import styles from './footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
const list = [
    {
        name: 'Github',
        href: 'https://github.com/PURUSHOTHAM-REDDY-N/',
        symbol: <GitHubIcon className={styles.btn} />,
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/purushotham-reddy-a608421b9/',
        symbol: <LinkedInIcon className={styles.btn} />,
    },
    // {
    //     name: 'Instagram',
    //     href: 'https://www.instagram.com/partheevonline/',
    //     symbol: <InstagramIcon className={styles.btn} />,
    // },
    // {
    //     name: 'Youtube',
    //     href: 'https://www.youtube.com/c/PartheevVideoClub',
    //     symbol: <YouTubeIcon className={styles.btn} />,
    // },
]
const Footer = () => {
    function topFunction() {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }

    const date = new Date
    return (
        <div className={styles.footerlayout}>
            <div onClick={topFunction} className={styles.backtotop}>
                <DoubleArrowIcon />
            </div>
            <div className={styles.medialist}>
                {list.map((e) => {
                    return (
                        <div
                            key={e.name}
                            onClick={() =>
                                window.open(e.href, '_blank').focus()
                            }
                            className={styles.mediabtn}
                        >
                            {e.symbol}
                        </div>
                    )
                })}
            </div>
            <div className={styles.copyright}>
                PURUSHOTHAM <span> &copy;{date.getFullYear()}</span>{' '}
            </div>
        </div>
    )
}

export default Footer

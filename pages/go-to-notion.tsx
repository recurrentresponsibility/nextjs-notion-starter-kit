import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function GoToNotion() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click', {
        event_category: 'Profile Link',
        event_label: 'Notion Price Table'
      })
    }

    setTimeout(() => {
      window.location.href = 'https://roasted-file-bf5.notion.site/2ffe120137ef80219500d855a03b9bb8'
    }, 500)
  }, [router])

  return (
    <div style={{ textAlign: 'center', marginTop: '40vh', fontSize: '18px' }}>
      ページに飛んでいます…
    </div>
  )
}

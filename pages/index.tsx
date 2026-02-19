import type { PageProps } from '@/lib/types'
import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)
    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)
    throw err
  }
}

export default function NotionDomainPage(props: PageProps) {
  return (
    <>
      <NotionPage {...props} />

      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <a
          href="https://roasted-file-bf5.notion.site/2ffe120137ef80219500d855a03b9bb8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4F46E5',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            価格表を見る
          </button>
        </a>
      </div>
    </>
  )
}

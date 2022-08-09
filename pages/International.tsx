
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function International() {
  const { t } = useTranslation("common");
  const router = useRouter()  
  return (
    <div>
      <h1>国际化页面{t('Welcome')}</h1>
      <p>{t('ViewBlog')}</p>
      <p>{t('WriteBlog')}</p>
      <Link href={router.asPath} locale={router.locale === 'en' ? 'ch' : 'en'} >
        <button>go</button>
      </Link>
    </div>
  )
}
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common",])),
      // Will be passed to the page component as props
    },
  };
}
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

type TSEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
};
const SEO = ({ title, description, keywords }: TSEOProps) => {
  const router = useRouter();
  // Cuztomize Meta Properties
  // Can create extra props and pass as arguments like title in case you want to change for each page.
  const metaDescription = description
    ? description
    : process.env.siteDescription;
  const metaKeywords = keywords ? keywords : process.env.siteKeywords;
  const twitterHandle = process.env.twitterHandle;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no"
        />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        {/* { Twitter } */}
        <meta name="twitte:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* {Open Graph} */}
        <meta property="og:url" content={router.basePath} key="ogurl" />
        <meta
          property="og:image"
          content={`${router.basePath}/${process.env.siteImagePreviewUrl}`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={router.basePath}
          key="ogsitename"
        />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta
          property="og:description"
          content={metaDescription}
          key="ogdesc"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${router.basePath}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        {/* Title */}
        <title>{title}</title>

        <meta name="msapplication-TileColor" content="#25836E" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Head>
      <Script src="https://assets.lemonsqueezy.com/lemon.js" defer></Script>
    </>
  );
};

export default SEO;
1;

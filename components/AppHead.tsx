import Head from "next/head";

export interface Meta {
  description?: string;
  author?: string;
  siteName?: string;
  coverImage?: string;
  coverImageAlt?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
}

type Props = {
  title: string;
  meta?: Meta;
  url?: string;
};

const AppHead: React.FC<Props> = ({
  title,
  url = `${process.env.NEXT_PUBLIC_URL}`,
  meta,
}) => {
  let author = "Teja Mallam";
  let description =
    "Computer Science student and developer passionate about web development, data analysis, and building modern web applications.";
  let siteName = "Teja Mallam - Portfolio";
  let type = "article";
  let coverImage: string | undefined;
  let coverImageAlt: string | undefined;
  let ogImage: string | undefined;
  let ogImageAlt: string | undefined;

  if (meta) {
    author = meta.author ? meta.author : author;
    description = meta.description ? meta.description : description;
    siteName = meta.siteName ? meta.siteName : siteName;
    type = meta.type ? meta.type : type;
    coverImage = meta.coverImage && meta.coverImage;
    coverImageAlt = meta.coverImageAlt && meta.coverImageAlt;
    ogImage = meta.ogImage && meta.ogImage;
    ogImageAlt = meta.ogImageAlt && meta.ogImageAlt;
  }

  let appOgImage = `${process.env.NEXT_PUBLIC_URL}/tejamallam-dev-og-new.png`;
  let appOgImageAlt = "Teja Mallam's Portfolio";

  if (ogImage) {
    appOgImage = ogImage;
  } else if (!ogImage && coverImage) {
    appOgImage = coverImage;
  }

  if (ogImageAlt) {
    appOgImageAlt = ogImageAlt;
  } else if (!ogImageAlt && coverImageAlt) {
    appOgImageAlt = coverImageAlt;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, India" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="en-IN" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author,
            url,
            email: "tejamallam1233@gmail.com",
            telephone: "+91-9392256662",
            jobTitle: "Aspiring Full Stack Developer",
            description,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.linkedin.com/in/tejamallam",
              "https://github.com/MallamTeja",
              "https://x.com/Mallam_Teja",
            ],
          }),
        }}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={appOgImage} />
      <meta property="og:image:alt" content={appOgImageAlt} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={appOgImageAlt} />
      <meta property="og:type" content={type} />
    </Head>
  );
};

export default AppHead;

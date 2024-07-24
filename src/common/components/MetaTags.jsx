import { Helmet } from 'react-helmet'

const MetaTags = ({ title = 'HYEHYE', subTitle, description, keywords }) => {
  return (
    <Helmet>
      <title>
        {title}
        {subTitle}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="방혜진" />
    </Helmet>
  )
}

export default MetaTags

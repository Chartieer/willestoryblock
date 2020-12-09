import React from 'react'
import Layout from '../../components/Layout'
import BlogPost from '../../components/BlogPost'
import StoryblokService from '../../utils/storyblok-service'
import HeroImage from '../../components/pagelements/HeroImage';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story,
      language: props.language,
    }
  }

  static async getInitialProps({ asPath, query }) {

    console.log("Query", query)
    StoryblokService.setQuery(query)

    let language = query.language || "en"
    let trimDefault = asPath.replace("/en/referenzen", "/referenzen")
    let res = await StoryblokService.get(`cdn/stories${trimDefault}`)

    return {
      res,
      language,
    }
  }


  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const content = this.state.story.content

    return (
      <Layout language={this.state.language}>
        <HeroImage content={content} />
      </Layout>
    )
  }
}
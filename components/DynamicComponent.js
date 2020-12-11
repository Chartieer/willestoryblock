import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import Text from './Text';

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'text': Text,
  'featured-posts': FeaturedPosts
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component} />
}

export default DynamicComponent
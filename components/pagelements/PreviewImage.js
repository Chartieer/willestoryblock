//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({

  gridelement: {
    listStyleType: 'none',
    width: '50%',
    height: '300px',
  },
})



const HeroImage = ({ content }) => {
  const classes = useStyles()
  console.log("PSOT", content)
  return (


    <li className={classes.gridelement}>

      <div className="mt-2">
        <a
          className=""
          href={`/${content.full_slug}`}
        >
          {content.content.name}
          <img src={content.content.headimage.filename} width="400" />
        </a>
        <p className="">{content.title}</p>
      </div>
      <div className="">

        {/* <div className={classes.imagepreview} style={{ backgroundImage: `url(${post.headimage.filename})` }}>
          <h1>{post.name}</h1>
        </div> */}
        {/* <a
          className="text-blue-600 hover:underline"
          href={`/${post.full_slug}`}
        >
          Read more
        </a> */}
      </div>
    </li>

  )
}

export default HeroImage



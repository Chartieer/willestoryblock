import Link from 'next/link';
import { motion } from 'framer-motion';
import Grid from './grid';

const postVariants = {
  initial: { scale: 0.00006, y: 230, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: '40',
    y: 0,
    x: 0,
    opacity: 0.4,
    //transition: { duration: 3.2, ease: [0.48, 0.15, 0.25, 0.96] }
    transition: { duration: 3.2 }
  }
};

const PostList = ({ posts }) => {

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: .1 } } }}
    >
      <div className="posts">
        <Grid>
          <Grid.Row>
            {posts.map(post => {
              return (

                <Grid.Col md="6">
                  <motion.div variants={postVariants}>
                    <Link scroll={false} href={`/referenzen/${post.slug}`} as={`/referenzen/${post.slug}`}>
                      <a>
                        {post.content.headimage &&
                          <motion.div whileHover="hover" style={{ maxWidth: '100%', height: '500px', overflow: 'hidden' }} variants={{ hover: { scale: 0.96 } }}>
                            <img src={post.content.headimage.filename} />
                          </motion.div>
                        }
                        <div>{post.title}</div>
                      </a>
                    </Link>
                  </motion.div>
                </Grid.Col>
              );
            })}
          </Grid.Row>
        </Grid>

        <style jsx>{`
        .posts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .post {
          width: 50%;
          min-width: 340px;

          overflow: hidden;
          padding: 20px;
        }
        @media (max-width: 700px) {
          .post {
            width: auto;
          }
        }
      `}</style>
      </div>
    </motion.div>
  )
};

export default PostList;
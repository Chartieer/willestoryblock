//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { createUseStyles, useTheme } from 'react-jss'
import Grid from '@ui/layout/grid';
import Section from '@ui/layout/Section';
import color from 'color';
import { motion } from 'framer-motion';
import Parallax from '@ui/layout/InViewParallax';
const _Name = 'lala';

const useStyles = createUseStyles(theme => ({
  container: {
    background: theme.marmor,
    minHeight: '45vh',
    position: 'relative',
    display: 'flex',
  },

  img: {
    width: '60vw',
    height: 'auto',
    marginBottom: '-12%',

  },

  h1: {
    paddingTop: '15%',
    paddingBottom: '5%',
    fontSize: 'calc(18px + (32 - 18) * ((100vw - 400px) / (1000 - 300)))',
    lineHeight: '1.35',
    textIndent: '30%',
    fontWeight: '400',

  },

  h2: {
    fontWeight: '500',
    fontSize: 'calc( 1.2rem + 0.5vw)',


  },

  p: {
    lineHeight: 1.7,
    fontSize: 'calc(14px + (17 - 14) * ((100vw - 300px) / (1000 - 300)))'

  },






}), { name: _Name })


const Lala = ({ content, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(props, theme)

  return (
    <>
      <section className={classes.container}>
        <Grid>
          <Grid.Row>
            <div>
              <h1 className={classes.h1}>
                Unsere Stärken sind die Beratung und Planung von Fußbodenkonstruktionen. Eine qualitativ hochwertige Ausführung der Arbeiten ist für uns selbstverständlich.
            </h1>
            </div>
            <motion.img
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className={classes.img} src="/chair.jpg" />
          </Grid.Row>
        </Grid>
      </section>

      <Section color="light" space="xl">
        <Grid>
          <Grid.Row>
            <Grid.Col sm="7" md="6">
              <h2 className={classes.h2}>
                Wille is a melting pott of people, companies and services with Boden in their DNA
              </h2>

            </Grid.Col>


          </Grid.Row>
          <Grid.Row>
            <Grid.Col sm="6">
              <p className={classes.p}>
                Ein Trainer ist nicht ein Idiot! Ein Trainer sei sehen was passieren in Platz. In diese Spiel es waren zwei, drei diese Spieler waren schwach wie eine Flasche leer! Haben Sie gesehen Mittwoch, welche Mannschaft hat gespielt Mittwoch? Hat gespielt Mehmet oder gespielt Basler oder hat gespielt Trapattoni? Wissen Sie, warum die Italienmannschaften kaufen nicht diese Spieler?</p>

            </Grid.Col>

            <Grid.Col sm="6">
              <p className={classes.p}>
                Extreme Temperaturen und die schlecht dokumentierte Region erschweren die Suche nach Kletterorten. Danndokumentierte Region erschweren die Suche nach Kletterorten. Danndokumentierte Region erschweren die Suche nach Kletterorten. Dann, endlich, die erste Herausforderung. Eine Höhle. Nein, ein Kunstwerk aus Eis. Zeit, das Outfit zu wechseln.
              </p>

            </Grid.Col>
          </Grid.Row>
        </Grid>

      </Section>


      <Parallax>

      </Parallax>

      {/* <Section space="sm" color="red" className={classes.red}>
        <Grid>
          <Grid.Row>
            <Grid.Col sm="8" md="8">
              <h3 className={classes.h3_light}>
                In diese Spiel es waren zwei, drei diese Spieler waren schwach wie eine Flasche leer!
              </h3>
            </Grid.Col>

            <Grid.Col sm="10" offset_sm="2">
              <p>
                Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich verstehen, was ich hab gesagt? Danke. Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich habe erklärt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch andere Mannschaften gesehen in Europa nach diese Mittwoch. Ich habe gesehen auch zwei Tage die Training. Ein Trainer ist nicht ein Idiot! Ein Trainer sei sehen was passieren in Platz. In diese Spiel es waren zwei, drei diese Spieler waren schwach wie eine Flasche leer! Haben Sie gesehen Mittwoch, welche Mannschaft hat gespielt Mittwoch?
              </p>
            </Grid.Col>
          </Grid.Row>
        </Grid>

      </Section> */}

    </>
  )
}

Lala.displayName = _Name

export default Lala
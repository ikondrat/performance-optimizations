// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Link as FormidableLink,
  Text as FormidableText,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableHeaderItem,
  TableItem
} from "spectacle";

const Text = ({children}) => (
  <FormidableText textColor='secondary' textAlign='left'>
    {children}
  </FormidableText>
);

const Link = ({children, href}) => (
  <FormidableLink href={href} textColor='secondary'>
    {children}
  </FormidableLink>
);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "rgba(255, 255, 255, 0.9)",
  tertiary: "white",
  quarternary: "rgb(228, 231, 5)" ,
  textColor: "rgba(255, 255, 255, 0.9)",
  textColorAux: "rgba(255, 255, 255, 0.7)",
  bg: "white"
}, {
  primary: "Helvetica",
  secondary: "Garamond"
});

const images = {
  seo: require('../assets/seo.png'),
  begging: require('../assets/begging.png'),
  define: require('../assets/define.png'),
  design: require('../assets/design.png'),
  hard: require('../assets/hard.png'),
  easy: require('../assets/easy.png'),
  lost: require('../assets/lost.png'),
  visitors: require('../assets/visitors.png'),
  smile: require('../assets/smile.svg')
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={100} theme={theme}>
        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1}>
            Performance optimization stategies
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading fit caps lineHeight={1}>
            Why?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.seo}>
          <Heading size={1} caps lineHeight={1} textAlign="right" textColor="primary">
            Seo?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.seo} bgDarken={0.6} textAlign="left">
          <Heading size={2} caps textAlign="left">
            Seo
          </Heading>
          <List>
            <ListItem>
              <Link href="https://goo.gl/JKQWr1">TTFB under the 200ms</Link>
            </ListItem>
            <ListItem>
              <Link href="https://goo.gl/ijfX18">SEO ranking estimates performance (Google)</Link>
            </ListItem>
            <ListItem>
              <Link href="https://goo.gl/ijfX18">For mobile sites will go live from Jul 28</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.seo} bgDarken={0.6} textAlign="left">
          <Heading size={2} textAlign="left">
            Seo Metrics
          </Heading>
          <List>
            <ListItem>
              First Paint (FP) / First Contentful Paint (FCP)
            </ListItem>
            <ListItem>
              First Meaningful Paint (FMP)
            </ListItem>
            <ListItem>
              Time to Interactive (TTI)
            </ListItem>
            <ListItem>
              Long Tasks (no tasks > 50ms)
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.seo} bgDarken={0.5}>
          <Heading size={2} textAlign="left">
            Seo recommendations
          </Heading>
          <List>
            <ListItem>
              <Link textColor="secondary" href="https://goo.gl/aR5so1">Check SEO recommendations from Google</Link>
            </ListItem>
            <ListItem>
              <Link textColor="secondary" href="https://goo.gl/zW5nQH">Look at metrics explanation</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.visitors}>
          <Heading size={1} lineHeight={1} textAlign="right" textColor="textColorAux">
            What about users?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.begging}>
          <Heading size={3} lineHeight={1} textAlign="left" textColor="textColorAux">
            Please take a look at our lovely promo video
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.design}>
          <Heading size={3} lineHeight={1} textAlign="right" textColor="textColorAux">
            We created nice design with animations
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.lost}>
          <Heading size={3} lineHeight={1} textAlign="right" textColor="textColorAux">
            Answer?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.seo} bgDarken={0.4}>
          <Heading size={2} caps textAlign="left">
            Lost Revenue
          </Heading>
          <List>
            <ListItem>
              <Link textColor="secondary" href="https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/">
                53% of mobile site visits are abandoned if pages take longer than 3 seconds to load
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor="secondary" href="https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/">Leaving is very high during first few seconds</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.define}>
          <Heading size={1} caps fits lineHeight={1} textColor="textColorAux">
            Spot your problem
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.define} bgDarken={0.6} textAlign="left">
          <Heading size={2} textAlign="left">
            Tools
          </Heading>
          <List>
            <ListItem>
              <Link href="https://www.webpagetest.org/">Webpagetest</Link>
            </ListItem>
            <ListItem>
              <Link href="https://developers.google.com/speed/">Page insights</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.google.com/analytics/#?modal_active=none">Google Analitycs</Link>
            </ListItem>
            <ListItem>
              <Link href="https://developers.google.com/web/tools/chrome-user-experience-report/">Chrome User Experience Report (BQ dataset)</Link>
            </ListItem>
            <ListItem>
              <Link href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.hard}>
          <Text textColor="textColorAux">
            I spent a day to optimize this function from N2 to NLogN but it still takes more than half a second to prepare the response
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.easy}>
          <Text textColor="textColorAux">
          I set transfer encoding to chunked
          </Text>
          <Text textColor="textColorAux">
          Now the response is ready in 20 ms
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1}>
            Strategies
          </Heading>
          <List>
            <ListItem>
              Network communications
            </ListItem>
            <ListItem>
              Rendering issues
            </ListItem>
            <ListItem>
              Architecture problems
            </ListItem>
            <ListItem>
              Prioritize business logic
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1}>
            Network
          </Heading>
          <List>
            <ListItem margin="1rem 0">
              Reduce cost of the connection
              <List margin="1rem 2rem">
                <ListItem>
                  CDN
                </ListItem>
                <ListItem>
                  HTTP/2
                </ListItem>
                <ListItem>
                  Speeding up TLS handshake
                </ListItem>
              </List>
            </ListItem>
            <ListItem margin="1rem 0">
              Reduce cost of the transfer
              <List margin="1rem 2rem">
                <ListItem>
                  Cache control
                </ListItem>
                <ListItem>
                  <Link href="https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker">Service worker</Link>
                </ListItem>
                <ListItem>
                  Advanced compressing algorithms (webp, brotli, zopfli)
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" textAlign="right">
          <Heading size={1}>
            Rendering
          </Heading>
          <List>
            <ListItem>
              Use windowing e.g. with React virtualized
            </ListItem>
            <ListItem>
              <Link href="https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad">Track your app performance</Link>
            </ListItem>
            <ListItem>
              <Link href="https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations">Measure style calculation</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1}>
            Rendering in React
          </Heading>
          <List>
            <ListItem>
              Stateless components
            </ListItem>
            <ListItem>
              Pure Components
            </ListItem>
            <ListItem>
              Context API from 16.3
            </ListItem>
            <ListItem>
              Incoming async rendering changes
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={2} fits>
            Changes in lifecycle from 16.3
          </Heading>
          <List>
            <ListItem>
              Deprecated lifecycle props
              <List margin="1rem 2rem">
                <ListItem>
                  componentWillMount
                </ListItem>
                <ListItem>
                  componentWillReceiveProps
                </ListItem>
                <ListItem>
                  componentWillUpdate
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              New lifecycle methods
              <List margin="1rem 2rem">
                <ListItem>
                  getDerivedStateFromProps
                </ListItem>
                <ListItem>
                  getSnapshotBeforeUpdate
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1}>
            Architecture
          </Heading>
          <List>
            <ListItem>
              Avoid big initState
            </ListItem>
            <ListItem>
              Bundling/Splitting the app
            </ListItem>
            <ListItem>
              React loadable vs Loadable components
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" bgImage={images.smile} bgRepeat="no-repeat" bgSize="contain" bgDarken={0.5}>
          <Heading fits size={1}>
            Happy spotting!
          </Heading>
          <FormidableText margin="2rem 0 0 " textColor="secondary">
            Kondrat Shmoylov kondrat.shmoylov@gmail.com
          </FormidableText>
        </Slide>
      </Deck>
    );
  }
}

import React, { Component } from "react";
import styled from "styled-components";
import {
  Deck,
  Heading,
  ListItem as FormidableListItem,
  List,
  Slide,
  Link as FormidableLink,
  Text as FormidableText
} from "spectacle";

import createTheme from "spectacle/lib/themes/default";

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

const Text = styled(FormidableText)`
  &&& {
    text-align: left;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Link = styled(FormidableLink)`
  color: rgba(255, 255, 255, 0.9);
`;

const Header1 = styled(Heading)`
  &&& {
    color: rgba(255, 255, 255, 0.9);
    font-size: 5rem;
  }
`;

const Header2 = styled(Heading)`
  &&& {
    color: rgba(255, 255, 255, 0.9);
    font-size: 4rem;
  }
`;

const HeaderTeaser = styled(Header1)`
  &&& {
    text-align: right;
    margin-top: 5rem;
  }
`;

const ListItem = styled(FormidableListItem)`
  &&& {
    margin: 1rem 0;
  }
`;

const ListFolded = styled(List)`
  &&& {
    margin-left: 2rem;
  }
`;

const images = {
  seo: require('../assets/seo.png'),
  begging: require('../assets/begging.png'),
  define: require('../assets/define.png'),
  design: require('../assets/design.png'),
  hard: require('../assets/hard.png'),
  easy: require('../assets/easy.png'),
  lost: require('../assets/lost.png'),
  visitors: require('../assets/visitors.png'),
  smile: require('../assets/smile.svg'),
  strategies: require('../assets/strategies.png'),
  network: require('../assets/network.png'),
  rendering: require('../assets/rendering.png'),
  renderingReact: require('../assets/rendering-react.png'),
  lifecycle: require('../assets/lifecycle.png'),
  architecture: require('../assets/architecture.png')
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={100} theme={theme}>
        <Slide transition={["zoom"]} bgColor="black">
          <Header1>
            Performance optimization stategies
          </Header1>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Header1>
            Why?
          </Header1>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.seo}>
          <HeaderTeaser>
            Seo?
          </HeaderTeaser>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.seo} bgDarken={0.6} textAlign="left">
          <Header2>
            Seo
          </Header2>
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
          <Header2>
            Seo recommendations
          </Header2>
          <List>
            <ListItem>
              <Link href="https://goo.gl/aR5so1">Check SEO recommendations from Google</Link>
            </ListItem>
            <ListItem>
              <Link  href="https://goo.gl/zW5nQH">Look at metrics explanation</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.visitors} bgDarken={0.1}>
          <HeaderTeaser>
            What about users?
          </HeaderTeaser>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.begging} bgDarken={0.1}>
          <HeaderTeaser>
            Please take a look at our lovely promo video
          </HeaderTeaser>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.design} bgDarken={0.1}>
          <HeaderTeaser>
            We created nice design with animations
          </HeaderTeaser>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.lost} bgDarken={0.1}>
          <HeaderTeaser>
            Answer?
          </HeaderTeaser>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Header2>
            Lost Revenue
          </Header2>
          <List>
            <ListItem>
              <Link href="https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/">
                53% of mobile site visits are abandoned if pages take longer than 3 seconds to load
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/">Leaving is very high during first few seconds</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.define}>
          <Header1>
            Spot your problem
          </Header1>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.define} bgDarken={0.6} textAlign="left">
          <Header2>
            Tools
          </Header2>
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
        <Slide transition={["slide"]} bgImage={images.hard} bgDarken={0.1}>
          <Text>
            I spent a day to optimize this function from N2 to NLogN but it still takes <strong>more than half a second</strong> to prepare the response
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.easy}>
          <Text>
          I set transfer encoding to chunked and
          now the response is ready in <strong>20 ms</strong>
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.strategies} bgDarken={0.4}>
          <Header2>
            Strategies
          </Header2>
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
        <Slide transition={["slide"]} bgImage={images.network} bgDarken={0.5}>
          <Header2>
            Network
          </Header2>
          <List>
            <ListItem>
              Reduce cost of the connection
              <ListFolded>
                <ListItem>
                  CDN
                </ListItem>
                <ListItem>
                  HTTP/2
                </ListItem>
                <ListItem>
                  Speeding up TLS handshake
                </ListItem>
              </ListFolded>
            </ListItem>
            <ListItem>
              Reduce cost of the transfer
              <ListFolded>
                <ListItem>
                  Cache control
                </ListItem>
                <ListItem>
                  <Link href="https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker">Service worker</Link>
                </ListItem>
                <ListItem>
                  Advanced compressing algorithms (webp, brotli, zopfli)
                </ListItem>
              </ListFolded>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.rendering} bgDarken={0.5}>
          <Header1>
            Rendering
          </Header1>
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
        <Slide transition={["slide"]} bgImage={images.renderingReact} bgDarken={0.5}>
          <Header1>
            Rendering in React
          </Header1>
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
        <Slide transition={["slide"]} bgImage={images.lifecycle} bgDarken={0.5}>
          <Header2>
            Changes in lifecycle from 16.3
          </Header2>
          <List>
            <ListItem>
              Deprecated lifecycle props
              <ListFolded>
                <ListItem>
                  componentWillMount
                </ListItem>
                <ListItem>
                  componentWillReceiveProps
                </ListItem>
                <ListItem>
                  componentWillUpdate
                </ListItem>
              </ListFolded>
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
        <Slide transition={["slide"]} bgImage={images.architecture} bgDarken={0.5}>
          <Header1>
            Architecture
          </Header1>
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
          <Header1>
            Happy spotting!
          </Header1>
          <FormidableText margin="2rem 0 0 " textColor="secondary">
            Kondrat Shmoylov kondrat.shmoylov@gmail.com
          </FormidableText>
        </Slide>
      </Deck>
    );
  }
}

import React from "react";
import { Col, Container, Row, Progress, Button } from "reactstrap";

import Layout from "../components/Layout";

const Home = () => (
  <div>
    <Row className="row-padding facts">
      <Col>
        <Container>
          <Row className="vertical-center">
            <Col md="6">
              <h2>
                Hello. My name&apos;s Ben.
                <br />
                I&apos;m a developer.
              </h2>
              <hr />
              <h4>QUICK FACTS</h4>
              <hr />
              <Row>
                <Col md="4">
                  <h6>ninja skills</h6>
                </Col>
                <Col md="8">
                  <Progress striped value="70" />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <h6>gingerness</h6>
                </Col>
                <Col md="8">
                  <Progress color="warning" striped value="90" />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <h6>biscuit-eating</h6>
                </Col>
                <Col md="8">
                  <Progress striped value="80" />
                </Col>
              </Row>
              <hr />
              <h4>What are you up to, Ben?</h4>
              <hr />
              <p>
                I&apos;m currently working on some really cool chatbot tech at{" "}
                <a className="link-secondary" href="http://toplayfor.co.uk">
                  To Play For
                </a>
                . You can follow our work on{" "}
                <a
                  className="link-secondary"
                  href="http://twitter.com/ToPlayFor"
                >
                  Twitter
                </a>
                !
              </p>
            </Col>
            <Col md="6">
              <img
                className="img-fluid img-programmer"
                src="/static/images/programmer.png"
                alt="A cartoon version of Ben!"
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>

    <div className="row-padding projects">
      <div className="row-content">
        <div className="horizontal-center">
          <h2>projects.</h2>
        </div>
        <div className="project-list">
          <div className="project">
            <img className="img-fluid" src="/static/images/knights.png" />
            <br />
            <br />
            <h3>Knights</h3>
            <p>
              Knights is the first C++ game I&apos;ve developed. It&apos;s an
              RPG where you play a knight in shining armour, attempting to fend
              off the waves of creepy crawlies lurking in the different
              dimensions.
            </p>

            <p>
              Travel through the lands via portals, picking up food and a sword,
              until you&apos;ve got rid of them all.
            </p>

            <p>Sound easy? Download it below and see for yourself!</p>

            <div>
              <Button
                outline
                color="primary"
                href="/static/files/KnightsSetup.exe"
              >
                Download
              </Button>{" "}
              <Button
                outline
                color="primary"
                href="http://www.github.com/benhjames/Knights"
              >
                Source Code
              </Button>
            </div>
          </div>
          <div className="project">
            <img className="img-fluid" src="/static/images/planetbuilder.png" />
            <br />
            <br />
            <h3>Procedural Planet Generator</h3>
            <p>
              For my second-year project, I teamed up to create a procedural
              planet generator, speeding up the content creation process for
              artists on space games. I worked on the rendering aspects,
              creating the application in Java with an OpenGL library.
            </p>

            <Button
              outline
              color="primary"
              href="http://www.github.com/benhjames/PlanetBuilder"
            >
              Source Code
            </Button>
          </div>
          <div className="project">
            <img className="img-fluid" src="/static/images/fluidsim.png" />
            <br />
            <br />
            <h3>Unreal Engine Fluid Simulation</h3>
            <p>
              For my dissertation, I am currently implementing a real-time fluid
              simulation within Unreal Engine, making use of compute shaders and
              ray-marching techniques to simulate and render a fluid.
            </p>

            <p>
              The simulation itself takes place via a number of shaders acting
              on 3D textures, before accumulating density information in the
              final pixel shader to compute the correct colour.
            </p>

            <Button
              outline
              color="primary"
              href="http://www.github.com/benhjames/FluidSimulation"
            >
              Source Code
            </Button>
          </div>
          <div className="project">
            <img className="img-fluid" src="/static/images/girtonball.png" />
            <br />
            <br />
            <h3>Girton Ball Website</h3>
            <p>
              As part of Girton&apos;s biennual Spring Ball Committee, I
              designed and implemented the landing page to our Mayan-themed 2016
              Ball, as well as being responsible for a PHP-based and
              MySQL-backed ticketing system for upwards of 2000 guests.
            </p>

            <Button outline color="primary" href="http://www.girtonball.co.uk/">
              Visit Me
            </Button>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .projects {
        background: #dddfd4;
        margin: 0 -15px 0 -15px;
        display: flex;
        justify-content: center;
      }

      .project-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 20px;
      }

      .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0 20px 40px 20px;
      }

      @media (min-width: 480px) {
        .project {
          width: 50%;
        }
      }

      @media (min-width: 992px) {
        .project {
          width: 33%;
        }
      }

      .row-content {
        max-width: 1140px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      .facts {
        background-color: #0e3f65;
        text-align: center;
        color: #fff;
      }

      .img-programmer {
        padding-left: 80px;
        padding-right: 80px;
      }

      .horizontal-center {
        justify-content: center;
      }
    `}</style>
  </div>
);

export default Layout(Home);

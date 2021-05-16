import React from "react";
import { Row, Col, Container } from "reactstrap";

import Layout from "../components/Layout";

const CV = () => (
  <div>
    <Row className="row-padding education">
      <Col>
        <Container>
          <h3>Education</h3>
          <h5>University of Cambridge. (2013 – 2016)</h5>
          <h6>BA Computer Science (2:1)</h6>
          <ul>
            <li>
              Wrote a dissertation on simulating and rendering fluids in
              real-time in Unreal Engine 4.
            </li>
            <li>
              Implemented a tool for procedurally creating planets as a team
              project.
            </li>
            <li>
              IT Officer of the Spring Ball committee, involving maintaining and
              adding new features to a ticketing system for 2000 guests, and
              designing and creating the landing page.
            </li>
            <li>
              Part of the university-wide Amateur Dramatics Club as a Chief
              Electrician.
            </li>
          </ul>

          <h5>Wilson’s School, Wallington. (2006 – 2013)</h5>
          <ul>
            <li>
              A Level: 4 A*s in Maths, Further Maths, Physics and Computing.
            </li>
            <li>
              GCSE: 10 A*s including Maths, English, Triple Science, German and
              Business Studies.
            </li>
          </ul>
        </Container>
      </Col>
    </Row>

    <Row className="row-padding work">
      <Col>
        <Container>
          <h3>Work Experience</h3>
          <h5>To Play For – Technical Director: (July 2016 – Now)</h5>
          <ul>
            <li>
              Creating games, interactive stories and simulations using
              artificial intelligence.
            </li>
          </ul>

          <h5>
            NaturalMotion – Software Engineer Intern: (July – October 2015)
          </h5>
          <ul>
            <li>Wrote application code for Euphoria, an animation engine.</li>
            <li>
              Implemented new debugging tools for in-house developers to
              visualise a scene’s data hierarchy, including a graph-based node
              editor and new views onto the application database.
            </li>
            <li>
              Created a new workflow for adding basic lighting into the editor’s
              viewports.
            </li>
            <li>
              Fixed many bugs, including ambient occlusion, collision and
              lighting issues.
            </li>
          </ul>

          <h5>Ninja Theory – Programming Intern: (June – September 2014)</h5>
          <ul>
            <li>
              Worked on the Disney Infinity platform, contributing to a large
              code base on a daily basis.
            </li>
            <li>
              Implemented an algorithm to procedurally cut meshes at runtime.
            </li>
            <li>
              Added some limb-slicing features so characters could play
              animations when limbs were cut off.
            </li>
            <li>
              Involved working on multiple consoles to ensure consistency in
              rendering.
            </li>
          </ul>

          <h5>
            Jagex Games Studio – Technical QA Engineer: (July – September 2013)
          </h5>
          <ul>
            <li>
              Responsible for testing changes to game engine, including writing
              scripts to test new commands.
            </li>
            <li>
              Investigated technical bugs such as crashes submitted by players
              and regressed fixes for them.
            </li>
            <li>
              Engaged with the community in live-streams on Twitch and on forums
              to give updates on bug fixes.
            </li>
            <li>
              Designed and scripted a boss in personal free time, with multiple
              special attacks and fight phases.
            </li>
          </ul>

          <h5>
            Amazon Development Centre – IT Assistant: (July – August 2012)
          </h5>
          <ul>
            <li>
              Implemented corporate website involving liaising between the
              design and system architecture teams.
            </li>
            <li>
              Lead of a project to set up a multi-monitor rig displaying a
              graphic to welcome clients to the office.
            </li>
            <li>
              Handled configuration and testing of communication devices in new
              office.
            </li>
          </ul>

          <h5>Pushbutton – Work Experience: (June 2011)</h5>
          <ul>
            <li>
              Collated and implemented content into an application built for a
              client to exhibit at the IBC Trade Fair in Amsterdam, showcased
              for worldwide audiences.
            </li>
            <li>
              Designed the user interface and aesthetics for the application.
            </li>
            <li>
              Rooted out various glitches and tested functionality fully to
              ensure suitability for the client’s specification.
            </li>
          </ul>
        </Container>
      </Col>
    </Row>

    <Row className="row-padding skills">
      <Col>
        <Container>
          <h3>Technical Skills</h3>
          <p>
            <b>Programming.</b> Strong knowledge of C++. Sound knowledge of Java
            and C#, as well as HTML, JS and WebGL.
          </p>
          <p>
            <b>Project tools.</b> Adept with version control systems (Git,
            Perforce) and bug tracking software (JIRA).
          </p>
          <p>
            <b>Rendering.</b> Knowledge of DirectX/OpenGL, shader languages and
            shader pipelines.
          </p>
          <p>
            <b>Engines.</b> Good knowledge of Unreal Engine, and experience of
            writing MOBA-like networking code in Unity.
          </p>
        </Container>
      </Col>
    </Row>

    <style jsx global>{`
      .education {
        background-color: #0e3f65;
        color: #fff;
      }

      .work {
        background-color: #dddfd4;
      }

      .skills {
        background-color: #fae596;
      }
    `}</style>
  </div>
);

export default Layout(CV);

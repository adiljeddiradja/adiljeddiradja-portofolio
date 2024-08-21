import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import ronsox from "../../Assets/ronsox.png";
import suicide from "../../Assets/Projects/suicide.png";
import wmbf from "../../Assets/wmbf.png";
import spring from "../../Assets/spring.png";
import shop from "../../Assets/shop.png";
import laravel from "../../Assets/laravel.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ronsox}
                            isBlog={false}
                            title="Ronsox-WasteBank-MobileApp"
                            description="Ronsox is a mobile app that simplifies waste management and rewards users for their eco-friendly actions. It offers features like  login, digital waste tracking, easy withdrawals, educational resources, a community, and transaction history. By incentivizing sustainable practices, Ronsox aims to promote environmental awareness and a cleaner future."
                            ghLink="https://github.com/adiljeddiradja/Ronsox-WasteBank-MobileApp"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={wmbf}
                            isBlog={false}
                            title="Warung Makan (FE) - React.Js"
                            description="Warung Makan is a front-end web application built using React.js and various supporting libraries. The app utilizes state management for managing application data, routing for navigation between pages, and responsive styling for optimal viewing on various devices."
                            ghLink="https://github.com/adiljeddiradja/Warung-Makan---React.Js.git"

                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={spring}
                            isBlog={false}
                            title="Warung Makan API-Spring Boot"
                            description="Warung Makan API is a robust RESTful API built using Spring Boot, designed to power the backend of a food ordering system. It provides endpoints for managing menus, processing orders, handling payments, and tracking deliveries. The API leverages a relational database to store product information, customer data, and order history, ensuring data integrity and scalability."
                            ghLink="https://github.com/adiljeddiradja/Warung-Makan-API"
                            // demoLink="https://editor.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={shop}
                            isBlog={false}
                            title="Enigma-Shop (FE) - React.Js"
                            description="Front-end web application built using React.js and various supporting libraries. The app utilizes state management for managing application data, routing for navigation between pages, and responsive styling for optimal viewing on various devices.

"
                            ghLink="https://github.com/adiljeddiradja/Enigma-Shop-React"
                            // demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={laravel}
                            isBlog={false}
                            title="Inventory-Laravel"
                            description="
                              Inventory-Laravel is a comprehensive inventory management system built on the Laravel framework. It provides a robust solution for businesses to efficiently track and manage their stock levels, product information."
                            ghLink="https://github.com/adiljeddiradja/CRUD-INVENTORY-LARAVEL"
                            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </Col>

                    {/*<Col md={4} className="project-card">*/}
                    {/*  <ProjectCard*/}
                    {/*    imgPath={emotion}*/}
                    {/*    isBlog={false}*/}
                    {/*    title="Face Recognition and Emotion Detection"*/}
                    {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
                    {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
                    {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
                    {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
                    {/*  />*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;

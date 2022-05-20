import * as React from "react";
import "../styles/style.css";
import styled from "styled-components";
import {schedule} from "../data/schedule";
import 'dayjs/locale/de'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import Timeslot from "./index/components/timeslot";

// TODO insert start and end.
// TODO insert zoom link.

const Wrapper = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (min-width: 960px) {
    width: 960px;
    margin: 0 auto 2rem;
  }

  @media (max-width: 959px) {
    width: calc(100% - 2rem);
    padding: 1rem;
  }
`

const Headline = styled.h1`
  margin: 2rem 0 2rem;
  text-align: center;
`

const JoinLink = styled.a`
  background-color: #E9454E;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  color: white;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #b7434b;
  }
`

const IndexPage = () => {
    return (
        <Wrapper>
            <Headline>Software Quality Day Schedule</Headline>
            <JoinLink href={'http://www.google.de'} target={'_blank'}>Join us in Zoom <FontAwesomeIcon icon={faVideo}/></JoinLink>
            {schedule.timeslots.map((timeslot, i) => <Timeslot key={`ts${i}`} timeslot={timeslot}/>)}
        </Wrapper>
    )
};

export default IndexPage;

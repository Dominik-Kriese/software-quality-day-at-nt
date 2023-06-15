import * as React from "react";
import {useState} from "react";
import "../styles/style.css";
import styled from "styled-components";
import {schedule} from "../data/schedule";
import 'dayjs/locale/de'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import Timeslot from "../components/timeslot";
import PersonalScheduleDialog from "../components/personal-schedule-dialog";
import {navigate} from "gatsby";

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

const MainButton = styled.a`
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  color: white;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
  }
`

const JoinLink = styled(MainButton)`
  background-color: #E9454E;

  &:hover {
    background-color: #b7434b;
  }
`

const ScheduleButton = styled(MainButton)`
  background-color: #5B4897;

  &:hover {
    background-color: #47367a;
  }
`

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const IndexPage = () => {
    const [scheduleVisible, setScheduleVisible] = useState(false);

    const updateScheduleVisibility = () => {
        window.scrollTo({top: 0});
        setScheduleVisible(!scheduleVisible);
    }

    const joinLink = process.env.GATSBY_JOIN_LINK as string;
    return (
        <Wrapper>
            <Headline>Software Quality Day Schedule</Headline>
            <Links>
                <JoinLink
                    href={joinLink}
                    target={'_blank'}>Join us in zoom <FontAwesomeIcon icon={faVideo}/></JoinLink>
                <ScheduleButton onClick={() => updateScheduleVisibility()}>Personal Schedule</ScheduleButton>
            </Links>
            {schedule.timeslots.map((timeslot, i) => <Timeslot key={`ts${i}`} timeslot={timeslot}/>)}
            {
                scheduleVisible
                    ? <PersonalScheduleDialog
                        closeFn={() => setScheduleVisible(!scheduleVisible)}></PersonalScheduleDialog>
                    : <></>
            }
        </Wrapper>
    )
};

export default IndexPage;

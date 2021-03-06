import Link from 'next/link'

import Container from '../components/atoms/Container'
import Heading from '../components/atoms/Heading'
import Logo from '../components/atoms/Logo'

import { choices } from '../utils/designTokens'
import { speakers, conferenceDate } from '../utils/constants'
import ScheduleBlock from '../components/organisms/ScheduleBlock'
import Subtitle from '../components/atoms/Subtitle'

const normalizedSpeakers = speakers.reduce((prev, cur) => {
  prev[cur.id] = cur
  return prev
}, {})

const scheduleData = [
  {
    time: `${conferenceDate}T08:00-05:00`,
    title: 'Welcome 🦄'
  },
  {
    time: `${conferenceDate}T08:15-05:00`,
    speaker: normalizedSpeakers['evangelina-ferreira']
  },
  {
    time: `${conferenceDate}T08:55-05:00`,
    speaker: normalizedSpeakers['carlos-azaustre']
  },
  {
    time: `${conferenceDate}T09:15-05:00`,
    speaker: normalizedSpeakers['laura-gonzalez']
  },
  {
    time: `${conferenceDate}T09:55-05:00`,
    speaker: normalizedSpeakers['alena-nikolaeva']
  },
  {
    time: `${conferenceDate}T10:15-05:00`,
    speaker: normalizedSpeakers['carmen-ansio']
  },
  {
    time: `${conferenceDate}T10:55-05:00`,
    speaker: normalizedSpeakers['facundo-corradini']
  },
  {
    time: `${conferenceDate}T11:15-05:00`,
    speaker: normalizedSpeakers['joan-leon']
  },
  {
    time: `${conferenceDate}T11:55-05:00`,
    speaker: normalizedSpeakers['jimena-castro']
  },
  {
    time: `${conferenceDate}T12:15-05:00`,
    title: 'Meal Break 🍕',
    isBreak: true
  },
  {
    time: `${conferenceDate}T12:55-05:00`,
    title: 'SWAG Raffle 🎁'
  },
  {
    time: `${conferenceDate}T13:05-05:00`,
    speaker: normalizedSpeakers['robin-dykema']
  },
  {
    time: `${conferenceDate}T13:45-05:00`,
    speaker: normalizedSpeakers['erifranck-nunez']
  },
  {
    time: `${conferenceDate}T14:05-05:00`,
    speaker: normalizedSpeakers['alex-ramirez']
  },
  {
    time: `${conferenceDate}T14:45-05:00`,
    speaker: normalizedSpeakers['marian-villa']
  },
  {
    time: `${conferenceDate}T15:05-05:00`,
    speaker: normalizedSpeakers['leonidas-esteban']
  },
  {
    time: `${conferenceDate}T15:45-05:00`,
    speaker: normalizedSpeakers['bramus-vandamme']
  },
  {
    time: `${conferenceDate}T16:05-05:00`,
    title: 'Closing Remarks 🌈'
  },
  {
    time: `${conferenceDate}T16:15-05:00`,
    title: 'Virtual Party 🎉',
    isBreak: true
  }
]

const schedule = () => {
  return (
    <div className="schedule">
      <Container>
        <div className="heading">
          <div>
            {' '}
            <Heading size="0" color="blue">
              Schedule
            </Heading>
            <Heading size={4} color="blue" withMargin>
              CSS Conf Colombia, April 10th
            </Heading>
          </div>
          <Subtitle size={1} color="red">
            <Link href="/">
              <a style={{ color: choices.colors.brand.cinnabar }}> &lt; Back</a>
            </Link>
          </Subtitle>
        </div>

        {scheduleData.map(schedule => (
          <ScheduleBlock
            key={schedule.time}
            isDone={false}
            isCurrent={false}
            {...schedule}
          />
        ))}
        <div className="logo">
          <Logo />
        </div>
      </Container>
      <style jsx>{`
        .schedule {
          background: ${choices.colors.brand.chiffon}
            url('/static/images/fish-tribal-yellow.svg') no-repeat;
          background-size: 80%;
          background-position: right top;
          width: 100%;
          padding: 50px 20px;
        }

        .heading {
          display: flex;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default schedule

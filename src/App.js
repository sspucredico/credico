import { Flex, Image as ImageCH } from '@chakra-ui/react'
import { API } from 'api'
import { useNavigate } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

import { title, configuration } from 'api/configuation'

function App() {
  const navigate = useNavigate()

  const url = [
    [
      API.offline.thubnail('participant'),
      () => navigate('/generate/type/participant'),
      configuration.participant.title,
    ],
    [
      API.offline.thubnail('diplomas'),
      () => navigate('/generate/type/diplomas'),
      configuration.diplomas.title,
    ],
    [
      API.offline.thubnail('mentor'),
      () => navigate('/generate/type/mentor'),
      configuration.mentor.title,
    ],
  ]

  return (
    <Flex flexDirection="column" alignItems="center">
      <Text color="white" fontSize="5rem" fontWeight={800} filter="blur(0px)">
        {title}
      </Text>
      <div className="card-holder">
        {url.map(([url, click, txt], idx) => {
          return (
            <div key={idx} className="card" onClick={click}>
              <div className="card-bg-overlay" />
              <div className="card-overlay">
                <div className="card-text">{txt}</div>
              </div>
              <ImageCH src={url} borderRadius="lg" />
            </div>
          )
        })}
      </div>
    </Flex>
  )
}

export default App

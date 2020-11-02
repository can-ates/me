import React, {useState} from "react"

import { Wrapper, Name, About, Navigation, Button } from "../styles/meStyles.js"
import bgBrush from "../images/brush-paint.svg"

const Me = () => {
  const [section, setSection] = useState(1)


  return (
    <Wrapper>
      <Name>
        <span
          style={{
            color: "#66fcf1",
          }}
        >
          Hello,
        </span>{" "}
        I'm Mutlu Can Ates.
      </Name>
      <About>
        I'm a Junior Full Stack Software Developer based in Ankara, Turkey. I
        enjoy creating dynamic web applications, and I'm React enthusiast.
      </About>
      <Navigation>
        <Button
          backo={section === 1 ? bgBrush : false}
          onClick={() => setSection(1)}
        >
          Projects
        </Button>
        <Button
          backo={section === 2 ? bgBrush : false}
          onClick={() => setSection(2)}
        >
          Stacks
        </Button>
      </Navigation>
      <div>Social Links</div>
    </Wrapper>
  )
}

export default Me

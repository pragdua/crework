import React from 'react'
import ReactVivus from 'react-vivus';
import example from '../images/example.svg';
 

const HeroImage = () => {
    return (
    <ReactVivus
    id="foo"
    option={{
      file: example,
      animTimingFunction: 'EASE_IN',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '250px', width: '350px', }}
    callback={console.log}
    duration={1000}
    />
    )
}

export default HeroImage

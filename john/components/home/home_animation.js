import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public/portfolio_intro.json'

export default function HomeAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}
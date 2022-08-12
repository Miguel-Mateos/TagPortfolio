import { useEffect, useRef, useState } from 'react'
import { TextCarousel } from '../../Components/TextCarousel/TextCarousel'
import './about.css'

const asEmployeeArray = [
  'I create central, complex components of the Front application',
  'I Drive and deliver on the  product roadmap, turning rough specs into features',
  'I Find elegant solutions to usability problems',
  'I Provide leadership and mentorship to other engineers on the team',
  'I Ramp on new web technologies that will make Front better'
]

const asPersonArray = [
  'I am a self-taught developer with a passion for web development.'
]

export const About = () => {
  return (
    <section className="default-section">
      <div className="description">
        <h1 className="title-box">About Me</h1>
        <TextCarousel title="As a Person" arr={asPersonArray} />
        <TextCarousel title="As an Employee" arr={asEmployeeArray} />
      </div>
    </section>
  )
}

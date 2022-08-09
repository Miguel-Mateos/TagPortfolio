import { useEffect, useRef, useState } from 'react'
import { TextCarousel } from '../../Components/TextCarousel/TextCarousel'
import './about.css'

const asEmployeeArray = [
  'Own central, complex components of the Front application',
  'Drive and deliver on our product roadmap , turning rough specs into features',
  'Find elegant solutions to usability problems',
  'Provide leadership and mentorship to other engineers on the team',
  'Ramp on new web technologies that will make Front better'
]

const asPersonArray = [
  'I am a self-taught developer with a passion for web development.'
]

export const About = () => {
  return (
    <section className="default-section">
      <div className="description">
        <h1 className="title-box">About Me</h1>
        <p>I am a self-taught developer with a passion for web development.</p>
        <TextCarousel title="As a Person" arr={asPersonArray} />
        <TextCarousel title="As an Employee" arr={asEmployeeArray} />
      </div>
    </section>
  )
}

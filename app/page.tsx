'use client'
import { GradientBackgroundCon, Pipe1, Pipe2, Pipe3, Pipe4, PipeFlow, FooterContainer, FooterLink } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      {/* Background */}
      <GradientBackgroundCon>
        <Pipe1>
          <PipeFlow></PipeFlow>
        </Pipe1>
        <Pipe2>
          <PipeFlow></PipeFlow>
        </Pipe2>
        <Pipe3>
          <PipeFlow></PipeFlow>
        </Pipe3>
        <Pipe4>
          <PipeFlow></PipeFlow>
        </Pipe4>
      </GradientBackgroundCon>

      {/* Quote Generator Modal*/}
      {/* <QuoteGeneratorModal
      /> */}

      

      {/* Footer */}
      <FooterContainer>
        <>
          Quotes Generated: {numberOfQuotes}
          <br/>
          Developed by <FooterLink href="https://github.com/TallestMan98" target="_blank"> @SebBarrett</FooterLink>
        </>
      </FooterContainer>
    </>
  )
}
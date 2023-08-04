'use client'
import { GradientBackgroundCon, Pipe1, Pipe2, Pipe3, Pipe4, PipeFlow, FooterContainer, FooterLink, QuoteGeneratorContainer, QuoteGeneratorTitle, QuoteGeneratorInnerContainer, QuoteGeneratorSubTitle, GenerateQuoteButton, GenerateQuoteButtonText, Block1, Block2 } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      {/* Background */}
      <GradientBackgroundCon>
        <Block1></Block1>
        <Block2></Block2>
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

      {/* Quote Generator Modal Pup-Up*/}
      {/* <QuoteGeneratorModal
      /> */}

      <QuoteGeneratorContainer>
        <QuoteGeneratorInnerContainer>
          <QuoteGeneratorTitle>
            Daily Inspiration Generator
          </QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>
            Do <strong>YOU</strong> crave inspiration? Generate yourself a random inspirational quote! Quotes provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes.io</FooterLink>
          </QuoteGeneratorSubTitle>
          <GenerateQuoteButton>
            <GenerateQuoteButtonText>
              Make a Quote...
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerContainer>
      </QuoteGeneratorContainer>

      

      {/* Footer */}
      <FooterContainer>
        <>
          Quotes Generated: {numberOfQuotes}
          <br/>
          Developed by <FooterLink href="https://github.com/TallestMan98" target="_blank" rel="noopener noreferrer">@SebBarrett</FooterLink>
        </>
      </FooterContainer>
    </>
  )
}
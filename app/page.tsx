'use client'
import { GradientBackgroundCon, Pipe1, Pipe2, Pipe3, Pipe4, PipeTop, PipeFlow, PipeBottom, HorizontalPipe1, HorizontalPipe2, HorizontalFlowRight, HorizontalFlowLeft, PipeMiddle } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Background */}
      <GradientBackgroundCon>
        <HorizontalPipe1>
          <PipeMiddle>
          </PipeMiddle>
          <HorizontalFlowRight>
          </HorizontalFlowRight>
          <HorizontalFlowLeft>
          </HorizontalFlowLeft>
        </HorizontalPipe1>
        <HorizontalPipe2>
          <PipeMiddle>
          </PipeMiddle>
          <HorizontalFlowRight>
          </HorizontalFlowRight>
          <HorizontalFlowLeft>
          </HorizontalFlowLeft>
        </HorizontalPipe2>
        <Pipe1>
          <PipeTop>
          </PipeTop>
          <PipeFlow>
          </PipeFlow>
          <PipeBottom>
          </PipeBottom>
        </Pipe1>
        <Pipe2>
          <PipeTop>
          </PipeTop>
          <PipeFlow>
          </PipeFlow>
          <PipeBottom>
          </PipeBottom>
        </Pipe2>
        <Pipe3>
          <PipeTop>
          </PipeTop>
          <PipeFlow>
          </PipeFlow>
          <PipeBottom>
          </PipeBottom>
        </Pipe3>
        <Pipe4>
          <PipeTop>
          </PipeTop>
          <PipeFlow>
          </PipeFlow>
          <PipeBottom>
          </PipeBottom>
        </Pipe4>
      </GradientBackgroundCon>
    </>
  )
}
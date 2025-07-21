import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/interviewCard';

const Home = () => {
  return (
   <>
   <section className='card-cta'>
    <div className='flex flex-col gap-6 max-w-lg'>
      <h2>
        Get interview -ready with Ai-Powered  Practice & Feedback
      </h2>
      <p className='text-lg'>
        Practice your interview skills with our AI-powered practice and feedback.
      </p>
      <Button asChild className='btn-primary max-sm:w-full'>
        <Link href="/interview"> Start an interview</Link>
      
      </Button>
    </div>
    <Image src="/robot.png" alt="robot-dude" width={400} height={400} className="max-sm:hidden" />
   </section>
   <section className="flex flex-col gap-6 mt-8" >
        <h2>
        Your Interview
      </h2>
      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key = {interview.id}/>
        ))}
    {/* <p>You have&apos;t take any interview yet</p> */}
    </div>
    </section>
    <section className="flex flex-col gap-6 mt-8">

      <h2>
        Take an interview
      </h2>
      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key = {interview.id}/>
        ))}
    
    </div>

    </section>
   </>
  )
}

export default Home;
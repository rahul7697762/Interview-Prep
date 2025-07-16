
"use client"
import React from 'react'
import Image from 'next/image'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'


const formSchema = z.object({
  username: z.string().min(2).max(50),
})

interface AuthFormProps {
  type: 'sign-in' | 'sign-up'
}

const AuthForm = ({ type }: {type: FormType}) => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      const isSignIn = type === 'sign-in';
      return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="logo" width={32} height={38} />
                    <h2 className=" text-primary-100">
                    PrepWise
                </h2>

                </div>
                <h3> Practice job Interview with AI</h3>
               
            
             <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
        {!isSignIn && <p>Name </p>}
        <p>Email</p>
        <p>Password</p>
        <Button className = "btn" type="submit">{isSignIn ? 'Sign in' : 'Create An Account'}</Button>
      </form>
    </Form>
    <p className = "text-center">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}
        <Link href = {!isSignIn ? "/sign-in" : "/sign-up"} className = "font-bold text-user-primary ml-1">
            {!isSignIn ? "Sign in" : "Sign up"}
        </Link>
    </p>
        </div>
        </div>
    )
}

export default AuthForm
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 3000)
  }

  const handleAadharVerification = () => {
    // Implement Aadhar verification logic here
    console.log("Verifying Aadhar...")
  }

  return (
    <Card className="w-[350px] mt-8 bg-white/80 backdrop-blur-sm">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form onSubmit={onSubmit}>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your email and password to login.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" type="submit">
                Login
              </Button>
              <div className="mt-4 text-center text-sm">
                <Link href="#" className="text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </CardFooter>
          </form>
        </TabsContent>
        <TabsContent value="register">
          <form onSubmit={onSubmit}>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create a new account to get started.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
      <div className="mt-4 flex flex-col space-y-2 px-6 pb-6">
        <Button variant="outline" className="w-full" onClick={() => {}}>
          <FaGoogle className="mr-2" />
          Continue with Google
        </Button>
        <Button variant="outline" className="w-full" onClick={handleAadharVerification}>
          Verify with Aadhar
        </Button>
      </div>
    </Card>
  )
}


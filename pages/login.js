import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Login() {
    const {data:session}=useSession();
    const router=useRouter();
    useEffect(()=>{
      console.log("User Session",)
      if(session)
      {
        router.push("/")
      }
     
    },[session])
  return (
    <div 
      className="relative min-h-screen w-full bg-inherit flex justify-center items-center ">
      {/* Logo in the Top Right */}
      <Image 
        className="absolute top-4 left-4"
        src="/logo3.png"
        alt="logo"
        width={500} 
        height={50} 
      />

      {/* Centered Sign-In Button */}
      <button 
        className="text-white flex flex-col items-center gap-2"
        onClick={() => signIn()}>
        <Image 
          className="rounded-2xl"
          src="/google2.png"
          alt="google"
          width={300}
          height={200}
        />
      </button>
</div>

  )
}

export default Login

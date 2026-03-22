import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href={'/contact'}>Contact The Superstar</Link>
    </div>
  )
}

export default page
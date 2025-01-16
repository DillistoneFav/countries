'use client'
 
import { useEffect } from 'react'

type Props = {
    error: Error
}
 
export default function Error({ error }: Props) {
   useEffect(() => {
       console.error(error)
   }, [error])

   return <h2>Something went wrong!</h2>
}
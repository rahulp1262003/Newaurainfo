import { Mail } from 'lucide-react'
import React from 'react'

function DiffQues() {
    return (
        <div className='text-black bg-gray-200 p-8 rounded-2xl'>
            <h1 class="pb-3 font-semibold text-lg">You have different questions?</h1>
            <p class="mb-5">Our team will answer all your questions. We ensure a quick response &amp; support for all your specific needs.</p>
            <div className='inline-flex  items-center my-2 bg-blue-600 text-white py-1 px-1 rounded-full'>
                <div className="mr-3 bg-white px-3 py-3 rounded-full">
                    <Mail size={15} color="blue" />
                </div>
                <a href="mailto:contact2nexorainfosolution@gmail.com" rel="noopener noreferrer" className="wrap-anywhere pr-4 max-md:text-xs text-[15px]">contact2nexorainfosolution@gmail.com</a>
            </div>
        </div>
    )
}

export default DiffQues
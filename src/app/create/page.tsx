'use client';
import ForumPost from '../../component/ForumPost'
import { SubmitHandler } from 'react-hook-form'
import { FormInputPost } from '@/types'
import BackButton from '@/component/BackButton';

const page = () => {
    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
        console.log(data)
    }
  return (
    <div>
      <BackButton/>
        <h1 className='text-2xl text-center font-bold my-4'>Add new post</h1>
            <ForumPost submit={handleCreatePost}/>
    </div>
      )
}

export default page

'use client';
import ForumPost from '@/component/ForumPost'
import { FormInputPost } from '@/types'
import { SubmitHandler } from 'react-hook-form'

const EditPostPage = () => {
    const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
        console.log(data)
    }
  return (
    <div>
        <h1 className='text-2xl text-center font-bold my-4'>Add new post</h1>
            <ForumPost submit={handleCreatePost}/>
    </div>
      )
}

export default EditPostPage

import BackButton from '@/component/BackButton'
import ButtonAction from '@/component/ButtonAction'

const BlogDetailPage = () => {
    return (
        <div>
            <BackButton/>
            <div className='mb-8'>
                <h2 className='text-2xl font-bold my-4'>Post</h2>
                <ButtonAction/>
            </div>
            <p className=''>Post First</p>
        </div>
    )
}

export default BlogDetailPage

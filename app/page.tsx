import Feed from '@components/Feed'
import Link from 'next/link'
import { getAllBlogs } from '@services/blogs';
export default async function Home() {
    const blogs = await getAllBlogs();
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className="head_text text-center">
                DSABook <br></br>
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center"> Learn Data Structures and Algorithms</span>
            </h1>
            <p className='desc text-center'>
                A platform for sharing and creating blogs related to Data Structures and Algorithms 
            </p>
            <Link href='/create-blog'
                className="create_blog_btn">
                CREATE A NEW BLOG
            </Link>
            <div>
            <Feed blogs={blogs}/>
            </div>
            
        </section>
    );
}
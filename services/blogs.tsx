export async function getAllBlogs () {
    const blogs = await fetch('https://dsabook.onrender.com/api/blogs')
    // console.log(blogs.json())
    return blogs.json();
}
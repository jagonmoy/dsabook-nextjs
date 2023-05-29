export async function getAllBlogs () {
    const blogs = await fetch('https://dsabook.onrender.com/api/blogs')
    return blogs.json();
}
export async function getBlog(id : string) {
    const blog = await fetch(`https://dsabook.onrender.com/api/blogs/${id}`)
    return blog.json();
}
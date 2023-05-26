export async function getAllBlogs () {
    const blogs = await fetch('https://dsabook.onrender.com/api/blogs')
    return blogs.json();
}
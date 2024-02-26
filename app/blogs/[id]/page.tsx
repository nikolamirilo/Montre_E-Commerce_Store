
const Blog = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <div>Blog: {id}</div>
    )
}

export default Blog
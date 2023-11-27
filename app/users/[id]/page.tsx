const UserProfile = ({ params }: { params: { id: string } }) => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      UserProfile for User with id: {params.id}
    </main>
  )
}

export default UserProfile

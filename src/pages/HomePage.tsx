import Boards from "../components/Boards"
import withAuth from "../components/HOC/withAuth"
import BaseLayout from "../components/Layouts/BaseLayout"

const HomePage = () => {


  return (
    <BaseLayout>
      <div className="container mx-auto my-4 flex flex-1 flex-col p-3">
        <Boards />
      </div>
    </BaseLayout>
  )
}

export default withAuth(HomePage)

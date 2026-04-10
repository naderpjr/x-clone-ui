import Feed from "@/components/Feed"
import Share from "@/components/Share"
import Link from "next/link"

const Homepage = () => {
  return (
    <div className=''>
      <div>
        <Link className="" href="/">For you</Link>
      </div>
      <Share />
      <Feed />
    </div>
  )
}

export default Homepage
import Image from "next/image";
import Link from "next/link";

const UserPage = () => {
    return (
        <div className="">
            {/* profile title  */}
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href="/">
                    <Image src="/icons/back.svg" alt="back" width={24} height={24} />
                </Link>
                <h1 className="font-bold text-lg">Nader Pjr</h1>
            </div>

            <Image src="/general/cover.jpg" alt="" width={600} height={600} />

            <Image src="/general/cover.jpg" alt="" width={600} height={600} />

            <Image src="/general/cover.jpg" alt="" width={600} height={600} />

            <Image src="/general/cover.jpg" alt="" width={600} height={600} />

            <Image src="/general/cover.jpg" alt="" width={600} height={600} />
        </div>
    )
}

export default UserPage;
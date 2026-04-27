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

            {/* info  */}
            <div>
                {/* cover and avatar container  */}
                <div className="relative w-full">
                    <div className="w-full aspect-[3/1] relative">
                        <Image src="/general/cover.jpg" alt="" width={600} height={200} />
                    </div>

                    {/* avatar  */}

                    <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-400 absolute left-4 -translate-y-1/2">
                        <Image src="/general/avatar.png" alt="" width={150} height={150} />
                    </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image src="/icons/more.svg" alt="more" width={20} height={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image src="/icons/explore.svg" alt="more" width={20} height={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image src="/icons/message.svg" alt="more" width={20} height={20} />
                    </div>
                    <button className="py-2 px-4 bg-white text-black font-bold rounded-full">Follow</button>
                </div>

                {/* user details  */}
            </div>
        </div>
    )
}

export default UserPage;
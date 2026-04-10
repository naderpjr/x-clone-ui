import Image from "next/image";
import PostInfo from "./PostInfo";

const Post = () => {
    return (
        <div className="p-4 border-y-[1px] border-borderGray">
            {/* Post type  */}
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                icon
                <span>Nader Dev reposted</span>
            </div>
            {/* post Content  */}
            <div className="flex gap-4">
                {/* Image  */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/general/avatar.png" alt="avatar" width={100} height={100} />
                </div>

                {/* content  */}
                <div className="flex-1">
                    {/* top section  */}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h1 className="text-md font-bold">Naderpjr</h1>
                            <span className="text-textGray">@naderpjr</span>
                            <span>1 day ago</span>
                        </div>
                        <PostInfo />
                    </div>
                    {/* Text and media  */}

                    
                </div>
            </div>
        </div>
    )
}

export default Post;
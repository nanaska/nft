import Image from "next/image";
import logoeler from "../public/ellnew6 1.png";
import telegram from "../public/Vector (1).svg"
import youtube from "../public/Vector (2).svg"

export default function Footer() {
    return (<>

        <div className="select-none flex  container border-t-[3px] min-h-[5vh] items-center justify-center">
            <div className="p-2 hover:scale-[115%] ease-in-out duration-100">
            <Image className="m-2" src={telegram} height={30} width={30}/></div>
            <div className="p-2 hover:scale-[115%] ease-in-out duration-100"><Image className="m-2" src={youtube} height={30} width={30}/>
            </div>

        </div>


    </>)
}
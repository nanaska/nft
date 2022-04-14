import photo1 from "../public/bx-check-circle 1 (3).svg"
import photo2 from "../public/bx-check-circle 1 (5).svg"
import photo3 from "../public/bx-check-circle 1 (4).svg"
import photo4 from "../public/bx-check-circle 1 (6).svg"
import photo5 from "../public/bx-check-circle 1 (7).svg"
import photo6 from "../public/bx-check-circle 1 (8).svg"
import photo7 from "../public/bx-check-circle 1 (9).svg"
import Image from "next/image"

export default function ForAuth() {
    return (<div className="container flex-col min-h-[100vh] s">

        <div className=" text-4xl text-center text-white ">
            ПРИЧИНЫ ВЗАИМОДЕЙСТВИЯ С NFT ДЛЯ АВТОРОВ
        </div>
        <div className="flex gap-x-14 mt-20 mb-10">
            <div className="flex-col text-center">
                <Image src={photo1} width={70} height={70}/>
                <h3 className="text-white">Полная свобода для самовыражения и творчества</h3>
            </div>
            <div className="flex-col text-center">
                <Image src={photo3} width={70} height={70}/>
                <h3 className="text-white">Первенство в мире цифрового искусства</h3>
            </div>
            <div className="flex-col text-center">
                <Image src={photo2} width={70} height={70}/>
                <h3 className="text-white">Особая защита прав автора с помощью новых технологий</h3>
            </div>
            <div className="flex-col text-center">
                <Image src={photo4} width={70} height={70}/>
                <h3 className="text-white">Конфиденциальность и анонимность личных данных</h3>
            </div>

        </div>
        <div className="">
            <div className="flex w-full border-t-[1px] "></div>
        </div>
        <div className="pl-[4rem] pr-[4rem]">
            <div className="flex gap-x-24 mt-12 mb-10">
                <div className="flex-col text-center">
                    <Image src={photo5} width={70} height={70}/>
                    <h3 className="text-white">Полная свобода для самовыражения и творчества</h3>
                </div>
                <div className="flex-col text-center">
                    <Image src={photo6} width={70} height={70}/>
                    <h3 className="text-white">Первенство в мире цифрового искусства</h3>
                </div>
                <div className="flex-col text-center">
                    <Image src={photo7} width={70} height={70}/>
                    <h3 className="text-white">Особая защита прав автора с помощью новых технологий</h3>
                </div>
            </div>
        </div>


    </div>)
}
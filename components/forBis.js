import style from "./forbis.module.css"
import Image from "next/image"
import photo1 from "../public/bx-check-circle 3.svg"
import photo2 from "../public/bx-check-circle 1.svg"
import photo3 from "../public/bx-check-circle 1 (1).svg"
import photo4 from "../public/bx-check-circle 2.svg"
import photo5 from "../public/bx-check-circle 1 (2).svg"
export default function ForBis() {
    return (
        <div className="container flex-col min-h-[100vh] select-none">

            <div className="text-center text-4xl font-bold text-white">
                ПОЧЕМУ <span className="text-[#EFAC00]">NFT</span> - ЭТО БУДУЩЕЕ ДЛЯ БИЗНЕСА?

            </div>
            <div className={style.grid}>
                <div className={style.grid1}>
                    {/*    Image*/}
                    <div className="flex-col text-center">
                        <Image src={photo1} height={70} width={70}/>
                        <h3 className="text-center">Реклама на новых площадках, не имеющих прежде аналогов</h3>
                    </div>
                </div>
                <div className={style.grid2}>
                    {/*    Image*/}
                    <div className="flex-col text-center">
                        <Image src={photo4} height={70} width={70}/>
                        <h3 className="text-center">Эксклюзивность товаров и услуг. Оригинальные билеты и уникальные
                            абонементы
                        </h3>
                    </div>
                </div>
                <div className={style.grid3}>
                    {/*    Image*/}
                    <div className="flex-col text-center">
                        <Image src={photo2} height={70} width={70}/>
                        <h3 className="text-center">Внедрение новых технологий в бизнес</h3>
                    </div>
                </div>
                <div className={style.grid4}>
                    {/*    Image*/}
                    <div className="flex-col text-center">
                        <Image src={photo5} height={70} width={70}/>
                        <h3 className="text-center">Безопасность и конфиденциальности данных для вас и ваших клиентов

                        </h3>
                    </div>
                </div>
                <div className={style.grid5}>
                    {/*    Image*/}
                    <div className="flex-col text-center">
                        <Image src={photo3} height={70} width={70}/>
                        <h3 className="text-center">Неограниченный доступ на мировой рынок, без санкций и запретов</h3>
                        <div/>
                    </div>
                </div>


            </div>
        </div>)
}

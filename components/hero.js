import Link from "next/link";

export default function Hero() {
    return (<>


        <div className=" select-none">
            <div className="container">
                <nav className="flex  justify-between items-center pt-7">
                    <Link href="/">
                        <h1 className="text-white font-bold text-4xl">Eller NFT</h1>
                    </Link>
                    <ul className="flex gap-[91px] md:hidden">
                        <li>
                            <Link href="/">
                  <span
                      className="font-medium text-[18px] text-white select-none lg:text-base hover:text-darkred transition-colors">
                    Главная
                  </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                  <span
                      className="font-medium text-[18px] text-white select-none lg:text-base hover:text-darkred transition-colors">
                    Услуги
                  </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                  <span
                      className="font-medium text-[18px] text-white select-none lg:text-base hover:text-darkred transition-colors">
                    О сервисе
                  </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                  <span
                      className="font-medium text-[18px] text-white select-none lg:text-base hover:text-darkred transition-colors">
                    Контакты
                  </span>
                            </Link>
                        </li>

                    </ul>
                </nav>
                {/*HERO SECTION*/}
                <div className="flex lg:flex-col min-h-[90vh]">
                    <div className="flex  w-1/2  items-center m-auto justify-center">
                        <h2 className="font-[600] text-9xl text-white"> ELLER GROUP NFT</h2>
                    </div>
                    <div className="flex-col w-1/2 m-auto  justify-center">
                        <h3 className=" text-[50px] font-[400] leading-[45px] text-white">
                            Погрузись в мир NFT
                            <br/>
                            Вместе с нашими
                            <br/> специалистами
                        </h3>
                        <button className="bg-[#EFAC00] p-3.5 rounded-[90px] mt-7 text-white shadow-amber-300 hover:p-4 duration-100">
                            Узнать больше
                        </button>
                    </div>
                </div>

            </div>
        </div>

    </>)
}
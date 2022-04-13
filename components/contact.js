import vibration from "../public/bx-mobile-vibration 1.svg"
import Image from "next/image"
import tel from "../public/Vector (3).svg"
export default function Contact() {
    return (<div className="container">


        <div className="flex justify-between gap-12 select-none">
            <div className="flex flex-col w-[40%] items-center justify-center">
                <h2 className="mr-auto text-[36px] leading-10 font-bold text-white text-[#EFAC00]">Этапы взаимодействия с нами:</h2>
                <h3 className="text-white">
                    <span className="text-[#EFAC00]">•</span> Вы оставляете свои контактные данные в форме обратной связи;<br/>
                    <span className="text-[#EFAC00]">•</span> Наш менеджер связывается с вами для назначения первичной консультации;<br/>
                    <span className="text-[#EFAC00]">•</span> Мы определяем необходимый вам пакет услуг;<br/>
                    <span className="text-[#EFAC00]">•</span> Заключаем договор;<br/>
                    <span className="text-[#EFAC00]">•</span> Начинаем работу над вашим проектом.<br/></h3>
                <div className="w-full mt-1 border-[1px] border-solid border-[rgba(255, 255, 255, 0.49)]"></div>
                <div className="flex-col mr-auto">
                    <h2 className="text-2xl text-white">Наши контакты</h2>
                    <div className="flex">
                        <div className="flex w-[5rem]">
                            <div className=" p-2 bg-[#EFAC00] rounded-[90px]">
                                <Image src={vibration} width={40} height={33}/>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white">Звоните или пишите нам</h3>
                            <h4 className="text-gray-500">+7 999-999-99-99</h4>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex justify-center items-center mr-5 w-[5rem]">
                            <div className=" p-2 bg-[#EFAC00] rounded-[90px]">
                                <Image src={tel} width={40} height={33}/>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white">Адрес</h3>
                            <h4 className="text-gray-500">г. Ярославль, ул. Мельничная,
                                д.43, подъезд 1, кв 78.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" ">
                <h3 className="text-3xl mb-4 text-white">Свяжитесь с нами</h3>
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <input placeholder="Ваше имя" className="w-full p-3 mb-2 rounded-[90px] bg-[#EFAC00B2]"/>
                        <input placeholder="Ваше email" className="rounded-[90px] p-3 w-full mb-2 bg-[#EFAC00B2]"/>
                        <button className="rounded-[90px]  w-3/4 p-3 bg-white">Отправить сообщение</button>
                    </div>
                    <div className="w-1/2">
                        <input placeholder="Сообщение" className="h-full w-full bg-[#EFAC00B2] rounded-[10px]"/>

                    </div>
                </div>
                <h4 className="text-white"><span className="text-[#EFAC00]">•</span> С радостью прокомментируем и ответим на все ваши вопросы</h4>
            </div>
        </div>
    </div>)
}
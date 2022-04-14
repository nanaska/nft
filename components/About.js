import Image from "next/image";
import logoeler from "../public/ellnew6 1.png";

export default function About() {
    return (<div className="container min-h-[100vh] select-none">


        <div className="flex justify-between">
            <div className="flex flex-col w-[50%] items-center justify-center">
                <h2 className="mb-4 mr-auto font-bold text-white text-4xl">О нас</h2>
                <h4 className="font-light leading-5 text-white text-[18px]">
                    NFT, или невзаимозаменяемые токены, – это новое и высокоперспективное направление развития краптографических активов.  Технологии уникальных цифровых «слепков» объектов культуры, искусства и тд. уже получили широкий резонанс во всем мире.
                    ELLER.Law -  уникальная кампания, которая органично объединяет/связывает юриспруденцию и цифровые технологии. Наша миссия заключается в формировании полной юридической защищенности будущих и текущих владельцев цифровых активов.
                    Мы поможем вам беспрепятственно использовать все возможности мира цифрового искусства и технологий, создать свой уникальный объект NFT и обеспечим полное юридическое и техническое сопровождение вывода объекта NFT на международный рынок.
                </h4>
            </div>
            <div className="flex-col " ><Image src={logoeler} height={600} width={500}/> </div>
        </div>
    </div>)
}
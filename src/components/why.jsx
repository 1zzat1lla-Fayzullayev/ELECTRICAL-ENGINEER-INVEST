import Wrapper from "../layout/wrapper"

function Why() {
    return (
        <>
            <Wrapper>
                <div className="py-[180px] mx-[20px] xl:mx-0">
                    <h2 className="font-[600] text-[25px] sm:text-[35px] md:text-[42px] leading-[1.23] text-center mb-[105px]">Почему мы?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] justify-items-center md:justify-items-start">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">1. Опыт и Квалификация</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">Компания имеет в штате сертифицированных специалистов с многолетним опытом работы в сфере проектирования и монтажа электрических систем.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">2. Безопасность и Соответствие Стандартам</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">Компания строго следует нормативным требованиям (ПУЭ, ГОСТ, СНиП и др.). Все работы выполняются с соблюдением мер безопасности</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">3. Широкий спектр услуг</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">Монтаж электрооборудования, кабельных линий, распределительных щитов и систем автоматизации. Регулярное техническое обслуживание и оперативный ремонт электрических сетей</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">4. Клиентоориентированность</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">Разработка проектов с учетом потребностей и пожеланий клиента, а также с предоставлением гибких условий сотрудничества.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">5. Гарантии и поддержка</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">Компания предоставляет гарантию на выполненные работы, а также постгарантийное обслуживание объектов.</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">6. Гибкость и Масштабность</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">Возможность работы с проектами различных масштабов — от мелких частных заказов до крупных промышленных объектов.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Why

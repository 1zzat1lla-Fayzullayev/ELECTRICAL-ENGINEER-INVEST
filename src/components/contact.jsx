/* eslint-disable no-unused-vars */
import { useState } from "react";
import Wrapper from "../layout/wrapper"
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const TOKEN = "6382568401:AAEmfVu2ngaTG1yxumTsAD913Llrb4ZiSug";
    const USERID = "-1002120402494";

    const encodeText = (text) => encodeURIComponent(text);

    const sendFeedback = async (e) => {
        e.preventDefault();

        if (!name || !phone || !description) {
            toast.error("Пожалуйста, заполните все поля.");
            return;
        }

        setIsLoading(true);

        const text = `Name: ${name}\nMessage: ${description}\nPhone number: ${phone}\n`;

        try {
            await axios.post(
                `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${encodeText(text)}`
            );
            toast.success("Сообщение успешно отправлено!");
        } catch (error) {
            toast.error("Не удалось отправить сообщение. Попробуйте еще раз.");
        } finally {
            setIsLoading(false);
            setName("");
            setPhone("");
            setDescription("");
        }
    };

    return (
        <>
            <div className="bg-[#ededed] py-[180px] ">
                <Wrapper>
                    <div className="mx-[20px] xl:mx-0">
                        <div className="pb-[60px] flex flex-col items-center justify-center text-center">
                            <h2 className="text-[30px] md:text-[52px] font-[600] leading-[1.23]">Свяжитесь с нами!</h2>
                            <p className="text-[20px] md:text-[26px] leading-[1.45] font-[300] mt-[41px] max-w-[800px]">Оставьте заявку, наши специалисты свяжутся с вами в ближайшее время.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-[40px]">
                            <input type="text" name="name" placeholder="Имя" className="w-full outline-none border-b border-b-[#8c8c8c] bg-transparent h-[60px]" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="number" name="number" placeholder="Телефон" className="w-full outline-none border-b border-b-[#8c8c8c] bg-transparent h-[60px]" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <textarea name="message" placeholder="Сообщение" className="w-full outline-none border-b border-b-[#8c8c8c] bg-transparent h-[102px] pt-[17px]" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <button className="bg-[#259da8] text-white px-[60px] h-[60px] font-[600]" onClick={sendFeedback}> {isLoading ? (
                                <span>Отправка...</span>
                            ) : (
                                <span>Отправить</span>
                            )}</button>

                        </div>
                        <div className="text-center pt-[130px]">
                            <h2 className="text-[30px] md:text-[42px] font-[600] leading-[1.23]">+998 90 012 74 00 <br />hello@mycompany.com</h2>
                            <p className="text-[24px] font-[300] py-[45px]">100206 O’zbekiston Respublikasi, Toshkent sh., Yunusobod tumani, 17-kvartal, Yangishahar k., 11</p>
                            <div className="flex items-center justify-center gap-[10px]">
                                <a href="#" className="cursor-pointer" target="_blank">
                                    <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#259da8"></path></svg>

                                </a>
                                <a href="#" className="cursor-pointer" target="_blank">
                                    <svg className="t-sociallinks__svg" role="presentation" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 48 48"><g clipPath="url(#clip0_3697_102)"><path fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM33.3482 14L25.9027 22.4686H25.9023L34 34H28.0445L22.5915 26.2348L15.7644 34H14L21.8082 25.1193L14 14H19.9555L25.119 21.3532L31.5838 14H33.3482ZM22.695 24.1101L23.4861 25.2173V25.2177L28.8746 32.7594H31.5847L24.9813 23.5172L24.1902 22.4099L19.1103 15.2997H16.4002L22.695 24.1101Z" fill="#259da8"></path></g><defs><clipPath id="clip0_3697_102"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>

                                </a>
                                <a href="#" className="cursor-pointer" target="_blank">
                                    <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#259da8"></path></svg>

                                </a>

                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

export default Contact
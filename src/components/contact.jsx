/* eslint-disable no-unused-vars */
import { useState } from "react";
import Wrapper from "../layout/wrapper";
import axios from "axios";
import toast from "react-hot-toast";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
    const USERID = "YOUR_CHAT_ID";

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
                            <button className="bg-[#259da8] text-white px-[60px] h-[60px] font-[600]" onClick={sendFeedback}>
                                {isLoading ? <span>Отправка...</span> : <span>Отправить</span>}
                            </button>
                        </div>
                        <div className="text-center pt-[130px]">
                            <h2 className="text-[30px] md:text-[42px] font-[600] leading-[1.23]">+998 90 012 74 00 <br />hello@mycompany.com</h2>
                            <p className="text-[24px] font-[300] py-[45px]">100206 O’zbekiston Respublikasi, Toshkent sh., Yunusobod tumani, 17-kvartal, Yangishahar k., 11</p>
                            <div className="flex items-center justify-center gap-[10px]">
                                <a href="#" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-telegram fa-2x text-[#259da8]"></i>
                                </a>
                                <a href="#" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook fa-2x text-[#259da8]"></i>
                                </a>
                                <a href="#" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-envelope fa-2x text-[#259da8]"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
}

export default Contact;

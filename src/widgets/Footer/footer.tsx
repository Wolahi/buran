import style from "./footer.module.scss";

import Tg from "@/assets/footer/tg.svg?react";
import Vk from "@/assets/footer/vk.svg?react";
import Youtube from "@/assets/footer/youtube.svg?react";

const Footer = () => (
  <footer className={style.footer}>
    <div className="inner">
      <div className={style.footer__content}>
        <div className={style.footer__info}>
          <div className={style.footer__copyright}>
            © Хоккейный клуб «Буран» Воронеж
          </div>
          <div>
            Адрес: 394030, г.&nbsp;Воронеж, ул.&nbsp;Карла Маркса, д.&nbsp;116,
            ДС&nbsp;"Юбилейный"
          </div>
          <div>
            E-mail:{" "}
            <a
              href="mailto:hcvoronezh@mail.ru"
              className="text-underline"
            >
              hcvoronezh@mail.ru,
            </a>{" "}
            <a
              href="mailto:anohcburan2017@yandex.ru"
              className="text-underline"
            >
              anohcburan2017@yandex.ru
            </a>
          </div>
        </div>
        <div className={style.footer__aside}>
          <div className={style.footer__socialsWrapper}>
            <div className={style.footer__socialsText}>Cоциальные сети:</div>
            <div className={style.footer__socials}>
              <a
                href="https://www.youtube.com/channel/UCP3u2JvZa24Km-MdmcePJ2A"
                className={style.footer__socialsItem}
                target="_blank"
                rel="noreferrer"
              >
                <Youtube />
              </a>
              <a
                href="https://t.me/hcburan1977"
                className={style.footer__socialsItem}
                target="_blank"
                rel="noreferrer"
              >
                <Tg />
              </a>
              <a
                href="https://vk.com/hcburan_vrn"
                className={style.footer__socialsItem}
                target="_blank"
                rel="noreferrer"
              >
                <Vk />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

import Style from "./footer.module.scss";

import Tg from "@/assets/footer/tg.svg?react";
import Vk from "@/assets/footer/vk.svg?react";
import Youtube from "@/assets/footer/youtube.svg?react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className={Style.footer}>
    <div className="inner">
      <div className={Style.footer__content}>
        <div className={Style.footer__left}>
          <div className={Style.footer__copyright}>
            © Хоккейный клуб «Буран» Воронеж
          </div>
        </div>
        <div className={Style.footer__right}>
          <div className={Style.footer__socialsWrapper}>
            <div className={Style.footer__socialsText}>
              Наши социальные сети:
            </div>
            <div className={Style.footer__socials}>
              <a
                href="#"
                className={Style.footer__socialsItem}
                target="_blank"
              >
                <Youtube />
              </a>
              <a
                href="#"
                className={Style.footer__socialsItem}
                target="_blank"
              >
                <Tg />
              </a>
              <a
                href="#"
                className={Style.footer__socialsItem}
                target="_blank"
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

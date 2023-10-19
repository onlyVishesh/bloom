import Logo from '../Logo/main';

import {
  GlobalStyles,
  FooterDiv,
  Title,
  TitleFigure,
  TitleFigcaption,
  TitleP,
  Socials,
  Svg,
} from './styled';

const Footer = () => {
  return (
    <>
      <GlobalStyles />
      <FooterDiv>
        <Title>
          <TitleFigure>
            <Logo src="https://i.ibb.co/2dBJqd6/4388667.png" alt="bloom-logo" />
            <TitleFigcaption>Blossom Labs</TitleFigcaption>
          </TitleFigure>
          <TitleP className="copyright">
            &copy; 2023 Blossom Labs. All rights reserved
          </TitleP>
          <TitleP className="copyright-description">
            All trademarks, logos, and brand names are the property of their
            respective owners.
          </TitleP>
        </Title>
        <Socials>
          <a href="">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <path
                d="M15.7422 2.41787C16.624 2.41448 17.5057 2.42335 18.3873 2.44445L18.6217 2.45291C18.8923 2.46258 19.1594 2.47466 19.482 2.48916C20.7677 2.54958 21.6449 2.75258 22.4146 3.05104C23.2121 3.35795 23.884 3.77362 24.5558 4.44545C25.1701 5.04914 25.6455 5.77939 25.949 6.58541C26.2475 7.35512 26.4505 8.23358 26.5109 9.51924C26.5254 9.84066 26.5375 10.1089 26.5471 10.3796L26.5544 10.614C26.5758 11.4951 26.5851 12.3765 26.5822 13.2578L26.5834 14.1592V15.7422C26.5864 16.6239 26.5771 17.5057 26.5556 18.3872L26.5483 18.6216C26.5387 18.8923 26.5266 19.1593 26.5121 19.482C26.4517 20.7676 26.2463 21.6449 25.949 22.4146C25.6465 23.2215 25.171 23.9523 24.5558 24.5557C23.9516 25.17 23.221 25.6454 22.4146 25.949C21.6449 26.2474 20.7677 26.4504 19.482 26.5108C19.1594 26.5253 18.8923 26.5374 18.6217 26.5471L18.3873 26.5543C17.5057 26.5758 16.624 26.5851 15.7422 26.5821L14.8408 26.5833H13.2591C12.3773 26.5863 11.4956 26.577 10.614 26.5555L10.3796 26.5483C10.0928 26.5379 9.806 26.5258 9.5193 26.512C8.23363 26.4516 7.35638 26.2462 6.58546 25.949C5.77912 25.6461 5.04875 25.1706 4.4455 24.5557C3.83052 23.9519 3.35465 23.2212 3.05109 22.4146C2.75263 21.6449 2.54963 20.7676 2.48921 19.482C2.47576 19.1952 2.46367 18.9085 2.45296 18.6216L2.44692 18.3872C2.42464 17.5057 2.41457 16.6239 2.41671 15.7422V13.2578C2.41334 12.3765 2.4222 11.4951 2.4433 10.614L2.45175 10.3796C2.46142 10.1089 2.4735 9.84066 2.488 9.51924C2.54842 8.23237 2.75142 7.35633 3.04988 6.58541C3.35362 5.77899 3.83042 5.04895 4.44671 4.44666C5.04954 3.83132 5.77946 3.35502 6.58546 3.05104C7.35638 2.75258 8.23242 2.54958 9.5193 2.48916L10.3796 2.45291L10.614 2.44687C11.4951 2.4246 12.3765 2.41453 13.2579 2.41666L15.7422 2.41787ZM14.5 8.45954C13.6995 8.44821 12.9048 8.59611 12.1619 8.89462C11.419 9.19313 10.7429 9.63631 10.1728 10.1984C9.60272 10.7605 9.15003 11.4303 8.84104 12.1688C8.53206 12.9074 8.37294 13.7 8.37294 14.5006C8.37294 15.3012 8.53206 16.0938 8.84104 16.8324C9.15003 17.5709 9.60272 18.2407 10.1728 18.8028C10.7429 19.3649 11.419 19.8081 12.1619 20.1066C12.9048 20.4051 13.6995 20.553 14.5 20.5417C16.1024 20.5417 17.6391 19.9051 18.7721 18.7721C19.9052 17.6391 20.5417 16.1023 20.5417 14.5C20.5417 12.8976 19.9052 11.3609 18.7721 10.2279C17.6391 9.09486 16.1024 8.45954 14.5 8.45954ZM14.5 10.8762C14.9816 10.8673 15.46 10.9545 15.9075 11.1326C16.355 11.3107 16.7625 11.5762 17.1062 11.9136C17.4499 12.251 17.7229 12.6535 17.9093 13.0975C18.0957 13.5416 18.1917 14.0184 18.1918 14.5C18.1919 14.9816 18.096 15.4584 17.9098 15.9025C17.7235 16.3467 17.4506 16.7492 17.107 17.0867C16.7634 17.4242 16.356 17.6898 15.9086 17.8681C15.4612 18.0464 14.9828 18.1337 14.5013 18.125C13.5398 18.125 12.6178 17.7431 11.938 17.0633C11.2582 16.3834 10.8763 15.4614 10.8763 14.5C10.8763 13.5386 11.2582 12.6166 11.938 11.9367C12.6178 11.2569 13.5398 10.875 14.5013 10.875L14.5 10.8762ZM20.8438 6.64704C20.454 6.66264 20.0853 6.82847 19.815 7.10979C19.5447 7.39112 19.3938 7.76611 19.3938 8.15624C19.3938 8.54637 19.5447 8.92137 19.815 9.2027C20.0853 9.48402 20.454 9.64985 20.8438 9.66545C21.2444 9.66545 21.6286 9.50632 21.9118 9.22306C22.1951 8.9398 22.3542 8.55562 22.3542 8.15504C22.3542 7.75445 22.1951 7.37027 21.9118 7.08701C21.6286 6.80375 21.2444 6.64462 20.8438 6.64462V6.64704Z"
                fill="white"
              />
            </Svg>
          </a>
          <a href="https://twitter.com">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M22.2054 2.71875H26.2025L17.4699 12.6996L27.7432 26.2812H19.6981L13.3978 18.044L6.18891 26.2812H2.18932L11.5297 15.6056L1.67578 2.71875H9.92266L15.6175 10.2479L22.2029 2.71875H22.2054ZM20.8025 23.8888H23.0174L8.72036 4.98558H6.34357L20.8025 23.8888Z"
                fill="white"
              />
            </Svg>
          </a>
          <a href="">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M14.9173 2.41666C13.3305 2.41666 11.7592 2.7292 10.2932 3.33645C8.82721 3.94369 7.49515 4.83374 6.37311 5.95578C4.10705 8.22185 2.83398 11.2953 2.83398 14.5C2.83398 19.8408 6.3019 24.3721 11.099 25.9792C11.7032 26.0758 11.8965 25.7012 11.8965 25.375V23.3329C8.5494 24.0579 7.83648 21.7137 7.83648 21.7137C7.28065 20.3121 6.49523 19.9375 6.49523 19.9375C5.39565 19.1883 6.57982 19.2125 6.57982 19.2125C7.78815 19.2971 8.42857 20.4571 8.42857 20.4571C9.47982 22.2937 11.2561 21.75 11.9448 21.46C12.0536 20.6746 12.3677 20.1429 12.7061 19.8408C10.0236 19.5387 7.20815 18.4996 7.20815 13.8958C7.20815 12.5546 7.66732 11.4792 8.45273 10.6212C8.3319 10.3192 7.90898 9.06249 8.57357 7.43124C8.57357 7.43124 9.58857 7.10499 11.8965 8.66374C12.8511 8.39791 13.8902 8.26499 14.9173 8.26499C15.9444 8.26499 16.9836 8.39791 17.9382 8.66374C20.2461 7.10499 21.2611 7.43124 21.2611 7.43124C21.9256 9.06249 21.5027 10.3192 21.3819 10.6212C22.1673 11.4792 22.6265 12.5546 22.6265 13.8958C22.6265 18.5117 19.799 19.5267 17.1044 19.8287C17.5394 20.2033 17.9382 20.9404 17.9382 22.0642V25.375C17.9382 25.7012 18.1315 26.0879 18.7477 25.9792C23.5448 24.36 27.0006 19.8408 27.0006 14.5C27.0006 12.9132 26.6881 11.3419 26.0809 9.8759C25.4736 8.40988 24.5836 7.07782 23.4615 5.95578C22.3395 4.83374 21.0074 3.94369 19.5414 3.33645C18.0754 2.7292 16.5041 2.41666 14.9173 2.41666Z"
                fill="white"
              />
            </Svg>
          </a>
          <a href="https://github.com/blossomlabsio">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M23.9093 6.44042C22.3022 5.69125 20.5622 5.1475 18.7497 4.83334C18.7338 4.83283 18.718 4.83581 18.7034 4.84208C18.6888 4.84834 18.6757 4.85773 18.6652 4.86959C18.4477 5.26834 18.1939 5.78792 18.0247 6.18667C16.1023 5.89667 14.1472 5.89667 12.2247 6.18667C12.0556 5.77584 11.8018 5.26834 11.5722 4.86959C11.5602 4.84542 11.5239 4.83334 11.4877 4.83334C9.67515 5.1475 7.94723 5.69125 6.32807 6.44042C6.31598 6.44042 6.3039 6.4525 6.29182 6.46459C3.00515 11.3825 2.0989 16.1675 2.54598 20.9042C2.54598 20.9283 2.55807 20.9525 2.58223 20.9646C4.75723 22.5596 6.84765 23.5263 8.9139 24.1667C8.95015 24.1788 8.9864 24.1667 8.99848 24.1425C9.48182 23.4779 9.91682 22.7771 10.2914 22.04C10.3156 21.9917 10.2914 21.9433 10.2431 21.9313C9.55432 21.6654 8.90182 21.3513 8.2614 20.9888C8.21307 20.9646 8.21307 20.8921 8.24932 20.8558C8.38224 20.7592 8.51515 20.6504 8.64807 20.5538C8.67224 20.5296 8.70849 20.5296 8.73265 20.5417C12.8893 22.4388 17.3722 22.4388 21.4806 20.5417C21.5047 20.5296 21.541 20.5296 21.5652 20.5538C21.6981 20.6625 21.831 20.7592 21.9639 20.8679C22.0122 20.9042 22.0122 20.9767 21.9518 21.0008C21.3235 21.3754 20.6589 21.6775 19.9702 21.9433C19.9218 21.9554 19.9097 22.0158 19.9218 22.0521C20.3085 22.7892 20.7435 23.49 21.2147 24.1546C21.251 24.1667 21.2872 24.1788 21.3235 24.1667C23.4018 23.5263 25.4922 22.5596 27.6672 20.9646C27.6914 20.9525 27.7035 20.9283 27.7035 20.9042C28.2352 15.4304 26.8214 10.6817 23.9577 6.46459C23.9456 6.4525 23.9335 6.44042 23.9093 6.44042ZM10.9197 18.0163C9.67515 18.0163 8.63599 16.8683 8.63599 15.4546C8.63599 14.0408 9.65099 12.8929 10.9197 12.8929C12.2006 12.8929 13.2156 14.0529 13.2035 15.4546C13.2035 16.8683 12.1885 18.0163 10.9197 18.0163ZM19.3418 18.0163C18.0972 18.0163 17.0581 16.8683 17.0581 15.4546C17.0581 14.0408 18.0731 12.8929 19.3418 12.8929C20.6227 12.8929 21.6377 14.0529 21.6256 15.4546C21.6256 16.8683 20.6227 18.0163 19.3418 18.0163Z"
                fill="white"
              />
            </Svg>
          </a>
        </Socials>
      </FooterDiv>
    </>
  );
};

export default Footer;

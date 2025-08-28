'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="flex justify-center items-center pt-7 pb-7 border-t border-shark-700 bg-shark-700/40 text-shark-50 rounded-tl-4xl rounded-tr-4xl backdrop-blur-3xl"
    >
      <div
        className="max-w-3xl md:max-w-4xl w-full flex flex-col xl:max-w-[1400px]"
      >
        <div
          className="max-w-sm md:max-w-4xl lg:max-w-7xl m-auto grid grid-cols-2 gap-x-5 md:gap-x-10 gap-y-16 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5"
        >
          <div
            className="col-span-1 md:col-span-2 justify-self-start md:justify-self-center lg:col-span-1"
          >
            <h5
              className="text-xl md:text-2xl leading-normal text-shark-900 dark:text-white font-bold text-left mb-3"
            >
              Sobre o BetAki
            </h5>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/terms-and-conditions" target="_blank" className="hover:text-dark">Termos e Condições</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/rgl" target="_blank" className="hover:text-dark">Jogo Responsável</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/privacy-policy" target="_blank" className="hover:text-dark">Política de Privacidade</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/aml-policy" target="_blank" className="hover:text-dark">Política AML</Link>
            </p>
          </div>
          <div
            className="col-span-1 md:col-span-2 justify-self-start md:justify-self-center lg:col-span-1"
          >
            <h5
              className="text-xl md:text-2xl leading-normal text-shark-900 dark:text-white font-bold text-left mb-3"
            >
              <Link href="/comunity" target="_blank" className="hover:text-dark">Comunidade</Link>
            </h5>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/promotions" target="_blank" className="hover:text-dark">Promoções</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/blog" target="_blank" className="hover:text-dark">Blog</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/technical-support" target="_blank" className="hover:text-dark">Central de Ajuda</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="/technical-support" target="_blank" className="hover:text-dark">Canais de Atendimento</Link>
            </p>
          </div>
          <div
            className="col-span-1 md:col-span-2 justify-self-start md:justify-self-center lg:col-span-1"
          >
            <h5
              className="text-xl md:text-2xl leading-normal text-shark-900 dark:text-white font-bold text-left mb-3"
            >
              <Link href="#" target="_blank" className="hover:text-dark">Aposte</Link>
            </h5>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="#" target="_blank" className="hover:text-dark">Aposta Esportiva</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="#" target="_blank" className="hover:text-dark">Esportes Ao Vivo</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="#" target="_blank" className="hover:text-dark">Jogos Slots</Link>
            </p>
            <p
              className="text-sm leading-normal text-shark-900 dark:text-white font-light text-left"
            >
              <Link href="#" target="_blank" className="hover:text-dark">Jogos Ao Vivo</Link>
            </p>
          </div>
          <div
            className="justify-self-start col-span-1 md:col-span-3 md:justify-self-center lg:col-span-1"
          >
            <h5
              className="text-xl md:text-2xl leading-normal text-shark-900 dark:text-white font-bold text-left mb-3"
            >
              Links Úteis
            </h5>
            <Link href="/contact" target="_blank" className="hover:text-dark">
              <div
                className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-transparent bg-transparent text-betaki-500 hover:bg-shark-50/20 hover:text-betaki-600 w-auto bg-shark-950! hover:bg-shark-900! hover:text-betaki-500!"
              >
                <span className="mr-2">
                  <Image src="/images/chat-icon.svg"
                    alt="Contate-nos"
                    className="w-[1.125rem] h-[1.125rem]"
                    width="54"
                    height="53"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="auto"
                  />
                </span>Contate-nos
              </div>
            </Link>
          </div>
          <div
            className="justify-self-center col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-1"
          >
            <h5
              className="text-xl md:text-2xl leading-normal text-shark-900 dark:text-white font-bold text-left mb-3"
            >
              Pagamentos
            </h5>
            <Image src="/images/pix-logo.webp"
              alt="Logo Pix"
              loading="lazy"
              decoding="async"
              fetchPriority="auto"
              width="350"
              height="125"
              className="h-10 w-auto" />
          </div>
        </div>

        <div className="bg-betaki-400/30 h-px mt-6 mx-10"></div>

        <div className="flex flex-row justify-center items-end mt-6 gap-5">
          <Image
            src="/logo-white.svg"
            alt="BetAki logo"
            loading="lazy"
            decoding="async"
            fetchPriority="auto"
            width="4478"
            height="1842"
            className="h-10 w-auto"
          />
          <Link href="https://www.instagram.com/betaki.bet/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-transparent bg-transparent text-betaki-500 hover:bg-shark-50/20 hover:text-betaki-600 w-auto bg-shark-950! rounded-full! px-1.5! hover:bg-shark-900! hover:text-betaki-500!"
          >
            <span className="">
              <Image
                src="/images/instagram-icon.BEwdzn4Z_11mgz9.svg"
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
                width="57"
                height="57"
                className="w-[1.125rem] h-[1.125rem]"
              />
            </span>
          </Link>
          <Link href="https://t.me/betaki_oficial" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-transparent bg-transparent text-betaki-500 hover:bg-shark-50/20 hover:text-betaki-600 w-auto bg-shark-950! rounded-full! px-1.5! hover:bg-shark-900! hover:text-betaki-500!"
          >
            <span className="">
              <Image
                src="/images/telegram-icon.DroOBn0n_1h7gXj.svg"
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
                width="57"
                height="50"
                className="w-[1.125rem] h-[1.125rem]"
              />
            </span>
          </Link>
          <Link href="https://titktok.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-transparent bg-transparent text-betaki-500 hover:bg-shark-50/20 hover:text-betaki-600 w-auto bg-shark-950! rounded-full! px-1.5! hover:bg-shark-900! hover:text-betaki-500!"
          >
            <span className="">
              <Image
                src="/images/tiktok-icon.CE-ZnIsB_ZXgKKg.svg"
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
                width="45"
                height="51"
                className="w-[1.125rem] h-[1.125rem]"
              />
            </span>
          </Link>
          <Link href="https://www.facebook.com/betaki.bet" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-transparent bg-transparent text-betaki-500 hover:bg-shark-50/20 hover:text-betaki-600 w-auto bg-shark-950! rounded-full! px-1.5! hover:bg-shark-900! hover:text-betaki-500!"
          >
            <span className="">
              <Image
                src="/images/facebook-icon.CskMOGqu_VKwlD.svg"
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
                width="30"
                height="57"
                className="w-[1.125rem] h-[1.125rem]"
              />
            </span>
          </Link>
        </div>
        <div className="bg-betaki-400/30 h-px mt-6 mx-10"></div>
        <div className="flex flex-col justify-center items-center mt-6 gap-2">
          <h5
            className="text-xl md:text-2xl leading-normal text-shark-900 dark:text-white font-bold text-left"
          >
            PATROCINADOR OFICIAL
          </h5>
          <p
            className="text-sm leading-normal text-shark-900 dark:text-white font-normal text-left"
          >
            APOIAMOS O ESPORTE
          </p>
          <Image
            src="/images/scfc.C_eozsBh_Z2oV4vE.webp"
            alt="SCFC logo"
            loading="lazy"
            decoding="async"
            fetchPriority="auto"
            width="248"
            height="257"
            className="h-20 w-auto"
          />
        </div>
        <div className="bg-betaki-400/30 h-px mt-6 mx-10"></div>
        <p
          className="text-xs leading-normal text-shark-900 dark:text-white font-normal text-center mt-6 mx-3 lg:mx-0"
        >
          A BetAki.bet.br é uma plataforma de entretenimento online operada pela
          Vanguard Entretenimento Brasil LTDA inscrita sob CNPJ nº
          56.885.537/0001-30, com sede no endereço Rua do Brum, n. 455, Recife,
          PE, CEP 50.030-260, e-mail suporte@betaki.bet.br, telefone
          0800-237-1386, devidamente autorizada pelo Governo Brasileiro através
          da Secretaria de Prêmios e Apostas (Ministério da Fazenda), conforme
          Portaria SPA/MF nº 693 de 1 de abril de 2025. A BetAki oferece aos
          seus usuários uma experiência inovadora em apostas de quota fixa, em
          total conformidade com as regulamentações brasileiras. A plataforma
          conta com a certificação GLI Brasil, emitida pela Gaming Laboratories
          International (GLI), assegurando os mais altos padrões de integridade
          e segurança no setor.
        </p>
        <div className="bg-betaki-400/30 h-px mt-6 mx-10"></div>
        <div
          className="flex flex-row items-center justify-center gap-5 mx-3 lg:mx-0"
        >
          <Image
            src="/images/reclame-aqui.webp"
            alt="Reclame Aqui! logo"
            loading="lazy"
            decoding="async"
            fetchPriority="auto"
            width="410"
            height="146"
            className="h-7 w-auto mt-6 md:h-14"
          />
          <Image
            src="/images/autorizado.webp"
            alt="Autorizado pelo ministerio da fazenda logo"
            loading="lazy"
            decoding="async"
            fetchPriority="auto"
            width="744"
            height="216"
            className="h-12 w-auto mt-6"
          />
        </div>
        <div
          className="flex flex-col items-center justify-center xl:flex-row xl:gap-5 mx-3 lg:mx-0"
        >
          <div
            className="w-full flex flex-row items-center justify-between gap-5 mt-6 xl:justify-end"
          >
            <Image
              src="/images/gaming-labs.webp"
              alt="Gaming Labs logo"
              loading="lazy"
              decoding="async"
              fetchPriority="auto"
              width="316"
              height="144"
              className="h-5 w-auto md:h-10"
            />
            <Image
              src="/images/gordon-moody.webp"
              alt="Gordon Moody logo"
              loading="lazy"
              decoding="async"
              fetchPriority="auto"
              width="352"
              height="110"
              className="h-5 w-auto md:h-10"
            />
            <Image
              src="/images/jogue-com-responsabilidade.DlqcsSd3_ff5jh.webp"
              alt="Responsabilidade logo"
              loading="lazy"
              decoding="async"
              fetchPriority="auto"
              width="306"
              height="64"
              className="h-5 w-auto md:h-10"
            />
          </div>
          <div
            className="w-full flex flex-row items-center justify-between gap-5 mt-6 xl:justify-start"
          >
            <Image
              src="/images/be-gamble-aware.CbLf0kD-_Z2uoItT.webp"
              alt="Be Gambler logo"
              loading="lazy"
              decoding="async"
              fetchPriority="auto"
              width="697"
              height="128"
              className="h-5 w-auto md:h-10"
            />
            <Image
              src="/images/ibia.COr5Fb65_ZEU2xG.webp"
              alt="Ibia logo"
              loading="lazy"
              decoding="async"
              fetchPriority="auto"
              width="319"
              height="123"
              className="h-5 w-auto md:h-10"
            />
          </div>
        </div>
        <div className="bg-betaki-400/30 h-px mt-6 mx-10"></div>
        <p
          className="text-xs leading-normal text-shark-900 dark:text-white font-normal text-center mt-2 mx-3 lg:mx-0"
        >
          Jogue com Responsabilidade. O jogo deve ser uma forma de
          entretenimento saudável. Pratique sempre o jogo consciente e fique
          atento aos sinais de comportamento compulsivo.
        </p>
        <div
          className="flex flex-row items-center justify-center mt-2 mb-2 gap-3 pb-22 md:pb-0"
        >
          <p
            className="text-xs leading-normal text-betaki-500 dark:text-betaki-500 font-normal text-center cursor-pointer"
          >
            Ouvidoria
          </p>
          <p
            className="text-xs leading-normal text-shark-900 dark:text-white font-normal text-center"
          >
            |
          </p>
          <p
            className="text-xs leading-normal text-betaki-500 dark:text-betaki-500 font-normal text-center cursor-pointer"
          >
            Denúncias
          </p>
          <p
            className="text-xs leading-normal text-shark-900 dark:text-white font-normal text-center"
          >
            |
          </p>
          <p
            className="text-xs leading-normal text-betaki-500 dark:text-betaki-500 font-normal text-center cursor-pointer"
          >
            Privacidade
          </p>
        </div>
      </div>
    </footer>
  )
}

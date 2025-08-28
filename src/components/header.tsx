'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex fixed h-16 w-full justify-center border-b border-betaki-600 bg-betaki-500/70 z-40 backdrop-blur-3xl">
      <nav
        className="h-full w-full max-w-7xl flex flex-row items-center justify-between px-1.5"
      >
        <button
          type="button"
          className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-transparent bg-transparent text-betaki-500 hover:bg-shark-50/20 hover:text-betaki-600 w-auto md:hidden!"
        >
          <span className="">
            <Image
              src="/images/promotion-icon.svg"
              alt="Icone de promoção"
              loading="lazy"
              decoding="async"
              fetchPriority="auto"
              width="20"
              height="21"
              className="w-[1.125rem] h-[1.125rem]"
            />
          </span>
        </button>
        <a href="https://betaki-dev-env.pages.dev/">
          <Image
            src="/logo-white.svg"
            alt="BetAki Logo"
            loading="lazy"
            decoding="async"
            fetchPriority="auto"
            width="243"
            height="100"
            className="h-8 md:h-10 w-auto"
          />
        </a>
        <ul
          className="h-full hidden md:flex flex-row items-center justify-center gap-4 text-white font-bold text-base"
        >
          <li
            className="h-full border-b-[3px] border-b-transparent text-shark-100 transition-all duration-200 hover:border-b-shark-50 hover:text-shark-50"
          >
            <a
              href="https://betaki-dev-env.pages.dev/esportes"
              className="h-full flex items-center"
            >Esportes</a>
          </li>
          <li
            className="h-full border-b-[3px] border-b-transparent text-shark-100 transition-all duration-200 hover:border-b-shark-50 hover:text-shark-50"
          >
            <a
              href="https://betaki-dev-env.pages.dev/esportes-ao-vivo"
              className="h-full flex items-center"
            >Esportes ao Vivo
            </a>
          </li>
          <li
            className="h-full flex items-center border-b-[3px] border-b-shark-50 text-shark-50"
          >
            <a
              href="https://betaki-dev-env.pages.dev/cassino"
              className="h-full flex items-center"
            >Cassino</a>
          </li>
          <li
            className="h-full border-b-[3px] border-b-transparent text-shark-100 transition-all duration-200 hover:border-b-shark-50 hover:text-shark-50"
          >
            <a
              href="https://betaki-dev-env.pages.dev/cassino-ao-vivo"
              className="h-full flex items-center"
            >Cassino ao Vivo</a>
          </li>
        </ul>
        <div className="flex flex-row items-center justify-center gap-2 text-white">
          <button
            type="button"
            className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-transparent bg-transparent text-betaki-500 hover:bg-shark-50/20 hover:text-betaki-600 w-auto md:block"
          >
            <span className="">
              <Image
                src="/images/promotion-icon.svg"
                alt="Icone de promoção"
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
                width="20"
                height="21"
                className="w-[1.125rem] h-[1.125rem]"
              />
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-shark-50 bg-transparent text-shark-50 hover:border-shark-100 hover:bg-shark-100/20 hover:text-shark-100 w-auto"
          >
            <span className="mr-2">
              <Image
                src="/images/register-icon.CSp4BpDy_1Erk7z.svg"
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority="auto"
                width="23"
                height="21"
                className="w-[1.125rem] h-[1.125rem]"
              /> </span>Registrar
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-sm border-2 border-shark-50 bg-shark-50 text-betaki-500 hover:border-shark-100 hover:bg-shark-100 w-auto"
          >
            Entrar
          </button>
        </div>
      </nav>
    </header>
  );
}

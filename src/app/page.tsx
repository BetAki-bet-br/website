/** Components */
import Header from "@/components/header";
import Footer from "@/components/footer";
import BannerTop from "@/components/banner-top";
import SlideGamesSearch from "@/components/slide-games-search";

export default function Home() {
  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="pt-16 pb-16">
        {/* Bakcground */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Shape 1: Top-left elongated oval */}
          <div
            className="absolute top-0 left-0 bg-betaki-400/30 transform -rotate-[20deg]"
            style={{
              width: "280px",
              height: "calc(50vh + 50px)",
              borderRadius: "500px",
              filter: "blur(80px)",
            }}
          ></div>
          {/* Shape 2: Bottom-left elongated oval */}
          <div
            className="absolute left-[200px] bg-betaki-400/30 transform -rotate-[15deg]"
            style={{
              width: "280px",
              height: "calc(50vh + 50px)",
              borderRadius: "500px",
              bottom: "-50px",
              filter: "blur(80px)",
            }}
          ></div>
          {/* Shape 3: Top-right circle */}
          <div
            className="absolute bg-betaki-400/30"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              top: "-150px",
              right: "-200px",
              filter: "blur(110px)",
            }}
          ></div>
        </div>
        {/* Main Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-2 md:px-5">
          {/* Banners do topo */}
          <BannerTop />

          {/* Conteúdo do site */}
          <div className="border border-shark-800 bg-shark-900/40 backdrop-blur-3xl py-5 rounded-xl">
            {/* Buscar por jogos */}
            <div className="flex justify-center mb-4 mx-2">
              <div className="relative w-full max-w-5xl">
                <input type="text" placeholder="Buscar jogos..." className="w-full px-4 py-1 md:py-2 pr-12 border border-betaki-500 hover:border-betaki-600 placeholder:text-shark-50/60 placeholder:italic bg-shark-950 hover:bg-shark-900 focus:bg-shark-900 rounded-full text-shark-50 focus:outline-none focus:ring-2 focus:ring-betaki-500" />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="35" height="37" viewBox="0 0 35 37" fill="none" className="w-5 h-5 text-shark-50/60">
                    <path d="M13.47 27.0744C9.95364 27.0744 6.97793 25.8094 4.5429 23.2794C2.10788 20.7493 0.889719 17.6592 0.888429 14.0089C0.887138 10.3586 2.1053 7.26841 4.5429 4.73839C6.98051 2.20837 9.95622 0.943359 13.47 0.943359C16.9838 0.943359 19.9602 2.20837 22.3991 4.73839C24.838 7.26841 26.0555 10.3586 26.0516 14.0089C26.0516 15.4829 25.8258 16.8732 25.3742 18.1798C24.9225 19.4863 24.3096 20.6421 23.5353 21.6472L34.3748 32.9036C34.7297 33.2721 34.9072 33.7411 34.9072 34.3107C34.9072 34.8802 34.7297 35.3492 34.3748 35.7177C34.02 36.0862 33.5683 36.2705 33.0199 36.2705C32.4715 36.2705 32.0198 36.0862 31.665 35.7177L20.8254 24.4613C19.8576 25.2653 18.7446 25.9018 17.4865 26.3709C16.2283 26.8399 14.8895 27.0744 13.47 27.0744ZM13.47 23.0542C15.8896 23.0542 17.9465 22.1752 19.6408 20.417C21.3351 18.6589 22.1817 16.5228 22.1804 14.0089C22.1791 11.4949 21.3326 9.35956 19.6408 7.60275C17.9491 5.84594 15.8922 4.9662 13.47 4.96352C11.0479 4.96084 8.99163 5.84058 7.30118 7.60275C5.61072 9.36492 4.76356 11.5003 4.75969 14.0089C4.75582 16.5174 5.60298 18.6535 7.30118 20.417C8.99937 22.1805 11.0557 23.0596 13.47 23.0542Z" fill="#C6D42D"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Slide de jogos */}
            <div className="pt-2 md:pt-6">
              <div className="relative">
                <SlideGamesSearch />
              </div>
            </div>

            {/* Apostas Realizadas */}
            <div className="pt-2 md:pt-6 px-4">
              <div className="relative">
                Apostas card
              </div>
            </div>

            {/* Os Mais Jogados BetAki */}
            <div className="pt-2 md:pt-6 px-4">
              <div className="relative">
                Os Mais Jogados BetAki
              </div>
            </div>
              
            {/* Jogos Populares */}

            {/* Cassino */}

            {/* Jogos de Cassino Populares */}

            {/* Esportes ao Vivo */}

            {/* Jogos de Cassino ao Vivo */}

            {/* Jogos Novos */}

          </div>

        </div >
      </main >
      <Footer />
    </div >
  );
}

import Card from "./VisiMisi/Card";

export default function VisiMisi() {
    return (
        <div id="visi-misi" className="py-20 sm:px-20 px-10 2xl:px-60 space-y-10">
            <div className="text-center space-y-3">
                <h1 className="text-4xl text-title font-semibold">VISI MISI SENTRA INOVASI</h1>
                <div className="flex justify-center">
                    <p className="text-paragraph sm:w-1/2 text-center text-lg">Untuk menjadi penggerak hilirisasi produk inovasi dalam menumbuhkan inovasi berbasis teknologi digital di Indonesia</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <Card logo="logo/visi1.png" desc="Menyelenggarakan pendampingan bagi masyarakat dalam memanfaatkan teknologi digital untuk pengembangan bisnis." />
                <Card logo="logo/visi2.png" desc="Menumbuhkembangkan masyarakat yang mampu memanfaatkan teknologi digital dalam peningkatan kesejahteraan." />
                <Card logo="logo/visi3.png" desc="Meningkatkan kerjasama lokal, nasional, maupun internasional dalam pengembangan bisnis berbasis teknologi digital. " />
                <Card logo="logo/visi4.png" desc="Serta Menciptakan bisnis berbasis teknologi digital yang mandiri dan berdaya saing tinggi." />
            </div>
        </div>
    )
}
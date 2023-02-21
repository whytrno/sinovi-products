export default function Hero() {
    return (
        <div className="relative w-full h-screen flex items-center justify-between px-20">
            <img src="/images/hero-bg.jpg" alt="hero" className="w-full h-full object-cover absolute top-0 left-0 -z-10" />
            <div>
                <h1 className="font-semibold text-5xl text-primary">Mulai bisnis bersama <br></br> Sentra Inovasi</h1>
            </div>
            <div>
                <img src="/images/hero.png" alt="hero" />
            </div>
        </div>
    )
}
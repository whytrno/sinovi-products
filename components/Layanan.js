import Child from "./Layanan/Child";
import List from "./Layanan/List";

export default function Layanan() {
    return (
        <div id="layanan" className="py-20 px-10 sm:px-20 2xl:px-60 space-y-10">
            <div className="text-center space-y-3">
                <h1 className="text-4xl text-title font-semibold">LAYANAN</h1>
                <div className="flex justify-center">
                    <p className="text-paragraph sm:w-1/2 text-center text-lg">Hal yang paling utama yang harus diketahui, bahwa tujuan Sentra Inovasi adalah untuk meningkatkan produk inovasi yang memberi manfaat bagi masyarakat dan memiliki nilai bisnis.</p>
                </div>
            </div>

            <Child dirrection="left" title="Pra Inkubasi" desc="Layanan pra inkubasi yang ditawarkan oleh Sentra Inovasi IT Telkom adalah" img="./images/layanan1.png" lists={["Pendaftaran", "Mendapat Tools Assesment", "Wawancara", "Screening Bisnis sampai Mendapatkan SK Tenant"]} />

            <Child dirrection="right" title="Inkubasi" desc="Kami juga menyediakan layanan inkubasi yang diberikan oleh Sentra Inovasi IT Telkom diantara lain sebagai berikut" img="./images/layanan2.png" lists={["Pendampingan pengurusan legalitas perusahaan", "Pendampingan penyiapan sarana produksi", "Pendampingan produksi", "Pendampingan sosialisasi dan edukasi pasar", "Pendampingan pengurusan HKI", "Pendampingan promosi & pameran", "Pendampingan peningkatan kemampuan bisnis tenant, serta Hibah atau temu investor"]} />

            <Child dirrection="left" title="Pasca Inkubasi" desc="Selain itu, kami juga menyediakan layanan pasca inkubasi yang dapat membantu calon startup membangun startup mereka diantara lain sebagai berikut" img="./images/layanan3.png" lists={["Proses monitoring pendapatan", "Monitoring jangkauan pemasaran", "Monitoring evaluasi, layanan scaleup", "Temu investor"]} />
        </div>
    )
}
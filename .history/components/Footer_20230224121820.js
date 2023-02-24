import InstagramIcon from "./Icon/InstagramIcon";
import LinkedinIcon from "./Icon/LinkedinIcon";

export default function Footer() {
    return (
        <>
            <div className="px-20 2xl:px-60 py-20 w-full bg-slate-100 space-y-5">
                <img src="./logo/sinovi.png" />
                <p className="text-lg text-paragraph">Sentra Inovasi sendiri merupakan salah satu unit di ITTP yang siap membantu para penggiat usaha StartUp khususnya di daerah Banyumas yang merasa kesulitan dalam mengurus perizinan HKI.</p>

                <div className="flex gap-5">
                    <InstagramIcon />
                    <LinkedinIcon />
                </div>
            </div>
            <div className="bg-[#EA3337] w-full">
                <p className="text-center">© 2023 Sentra Inovasi. All Rights Reserved</p>
            </div>
        </>
    )
}
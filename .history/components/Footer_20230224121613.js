import InstagramIcon from "./Icon/InstagramIcon";
import LinkedinIcon from "./Icon/LinkedinIcon";

export default function Footer() {
    return (
        <div className="px-20 2xl:px-60 w-full bg-slate-100">
            <img src="./logo/sinovi.png" />
            <p>Sentra Inovasi sendiri merupakan salah satu unit di ITTP yang siap membantu para penggiat usaha StartUp khususnya di daerah Banyumas yang merasa kesulitan dalam mengurus perizinan HKI.</p>

            <div className="flex gap-5">
                <InstagramIcon />
                <LinkedinIcon />
            </div>
        </div>
    )
}
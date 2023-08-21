import { useEffect } from "react";

export const Footer = () => {
    useEffect(() => {
            const d = new Date();
            const year = d.getFullYear().toString()
            const copyrightYear = document.getElementById("copyright-year")
            copyrightYear.setAttribute("dateTime", year)
            copyrightYear.innerText = year
    })
  return (
    <footer id="footer" className="text-white">
        <section className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between p-4 text-3xl">
            <address>
                <h2>朝霞</h2>
                僕だけの幻<br />
                Email: <a href="mailto:lam.nguyen1010@hcmut.edu.vn
">lam.nguyen1010@hcmut.edu.vn</a><br />
                Phone: <a href="tel:+84833425216">0833425216</a>
            </address>
            <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
                <a href="#waifu" className="hover:text-rose-600">
                Waifu
                </a>
                <a href="#quote" className="hover:text-rose-600">
                Quotes
                </a>
                <a href="#send" className="hover:text-rose-600">
                Send a letter
                </a>
            </nav>
            <div className="flex flex-col sm:gap-2">
                <p className="text-right">Copyright &copy; <time id="copyright-year" dateTime=""></time></p>
                <p className="text-right">All Rights Reserved</p>
            </div>
        </section>
    </footer>
  )
}

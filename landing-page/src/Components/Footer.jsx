"use client";
import Link from "next/link";
import { footerLinks } from "../Data/footerLinks";
import useInViewOnce from "../Hooks/useInViewOnce";

export default function FooterMobile() {
  const FooterMobile1 = useInViewOnce();
  const FooterMobile2 = useInViewOnce();
  const FooterMobile3 = useInViewOnce();
  const FooterMobile4 = useInViewOnce();
  const FooterMobile5 = useInViewOnce();
  return (
    <footer className="bg-black text-background pt-s160 pb-s16">
      <div className="flex flex-col md:flex-row justify-between space-y-s64 px-s32 ">
        {/* Pages */}
        <div className="space-y-s16">
          <h4
            ref={FooterMobile1.ref}
            className="heading-h6 animate-ytop-fadein "
          >
            Pages
          </h4>
          <ul
            ref={FooterMobile2.ref}
            className="space-y-s8 body-default animate-x-to-leftandz-fadein "
          >
            {footerLinks.pages.map((item) => (
              <li key={item.label}>
                <Link className="hover:text-primary-main" href={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div>
          <img
            ref={FooterMobile5.ref}
            src="./Images/footer.png"
            alt="Divyansh Logo"
            className="h-[180px]  animate-fadein"
          />
        </div>

        {/* Social Media (TEXT ONLY) */}
        <div className="space-y-s16">
          <h4
            ref={FooterMobile3.ref}
            className="heading-h6 animate-ytop-fadein "
          >
            Social Media
          </h4>
          <ul
            ref={FooterMobile4.ref}
            className="space-y-s8 body-default animate-x-to-leftandz-fadein "
          >
            {footerLinks.socialMedia.map((item, index) => (
              <li key={index}>
                <Link
                  className="hover:text-primary-main"
                  target="_blank"
                  href={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="  text-[55vw] leading-tight text-secondary/15 font-secondary text-center">
        Divyansh
      </div>

      <div className="   flex flex-col md:flex-row  justify-between px-s32 text-center caption text-secondary space-y-s8">
        <p>{footerLinks.bottom.copyright}</p>
        <Link href={footerLinks.bottom.privacy.path}>
          {footerLinks.bottom.privacy.label}
        </Link>
        <p>{footerLinks.bottom.credit}</p>
      </div>
      {/* Bottom */}
    </footer>
  );
}

import { navLinks } from "../../constant/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  useGSAP(() => {
    const NavTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    NavTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex gap-2 items-center">
          <img src="/images/logo.png" />
          <p>Baccuis Pour</p>
        </a>
        <ul>
          {navLinks.map(({ title, id }) => ( 
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

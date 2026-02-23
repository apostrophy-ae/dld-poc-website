import Image from "next/image";
import Link from "next/link";

// Brand assets from Figma
const deafIcon = "/assets/7be9e273bd1f19ec4acf52f8f2b8f80965898df9.png";
const dividerSvg = "/assets/40be1233ac77301b79ac3e3a95346922506aebb8.svg";
const gridSvg = "/assets/6063b89be2ef30587a8b1bd32dfb4bc496183e97.svg";
const eyeSvg = "/assets/13033aef458c7e762cbe59fc1c55ff140f0acc4d.svg";
const noqodiSvg = "/assets/2ebb7c1d83bc685c2c501a082c9096cb9c0b3144.svg";
const locationSvg = "/assets/3d3ced911b60f60926502582de9629c9c5e26d98.svg";
const newspaperSvg = "/assets/2778a756b0f33b5c26ad0d7160280c71d383419b.svg";
const dubaiAeSvg = "/assets/6f45bec83e39c2cc477c7e5fbc1473eb43b6b781.svg";

function Divider() {
  return (
    <div className="w-px h-[27px] shrink-0">
      <Image
        src={dividerSvg}
        alt=""
        width={1}
        height={27}
        className="h-[27px] w-px"
      />
    </div>
  );
}

function BarItem({
  icon,
  label,
  href = "#",
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-[4px] shrink-0 group hover:opacity-75 transition-opacity"
      aria-label={label}
    >
      {icon}
      <span className="font-dubai text-[9px] leading-[8px] tracking-[0.09px] text-black whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}

export function AccessibilityBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-start">
      {/* Deaf / accessibility floating badge */}
      <div className="ml-[15px]">
        <Link
          href="#"
          aria-label="Sign language accessibility"
          className="flex items-center justify-center bg-[#006E20] rounded-[3px] p-[3px] hover:opacity-80 transition-opacity"
        >
          <Image
            src={deafIcon}
            alt="Sign language"
            width={22}
            height={22}
            className="block"
          />
        </Link>
      </div>

      {/* Main sticky bar */}
      <div
        className="w-full bg-white flex items-center justify-between px-[15px] py-[4px]"
        style={{ boxShadow: "0px -12px 15px 0px rgba(16,24,40,0.07)" }}
        role="navigation"
        aria-label="Accessibility and quick-access bar"
      >
        {/* Left group: accessibility icons + services */}
        <div className="flex items-center gap-[8px]">
          {/* Eye icon */}
          <Link
            href="#"
            aria-label="Accessibility options"
            className="hover:opacity-75 transition-opacity shrink-0"
          >
            <Image src={eyeSvg} alt="Accessibility" width={17} height={17} />
          </Link>

          <Divider />

          {/* Grid + Services */}
          <BarItem
            icon={<Image src={gridSvg} alt="" width={13} height={13} />}
            label="Services"
            href="#"
          />
        </div>

        {/* Center: Noqodi Payment Support */}
        <Link
          href="#"
          className="flex items-center gap-[5px] shrink-0 hover:opacity-75 transition-opacity"
          aria-label="Noqodi Payment Support"
        >
          <Image src={noqodiSvg} alt="Noqodi" width={49} height={10} />
          <div className="font-dubai text-[9px] leading-[8px] tracking-[0.09px] text-black">
            <p className="mb-0">Payment</p>
            <p>Support</p>
          </div>
        </Link>

        {/* Right group: nav links */}
        <div className="flex items-center gap-[8px]">
          {/* Location */}
          <BarItem
            icon={<Image src={locationSvg} alt="" width={8} height={11} />}
            label="Location"
            href="#"
          />

          <Divider />

          {/* Newsroom */}
          <BarItem
            icon={<Image src={newspaperSvg} alt="" width={12} height={11} />}
            label="Newsroom"
            href="#"
          />

          <Divider />

          {/* Support (headphones) */}
          <BarItem
            icon={
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 0C3.68629 0 1 2.68629 1 6V9.5C1 10.3284 1.67157 11 2.5 11H4V6.5H2.5V6C2.5 3.51472 4.51472 1.5 7 1.5C9.48528 1.5 11.5 3.51472 11.5 6V6.5H10V11H11.5C12.3284 11 13 10.3284 13 9.5V6C13 2.68629 10.3137 0 7 0Z"
                  fill="black"
                />
              </svg>
            }
            label="Support"
            href="#"
          />

          <Divider />

          {/* dubai.ae */}
          <Link
            href="#"
            aria-label="dubai.ae portal"
            className="flex items-center shrink-0 hover:opacity-75 transition-opacity"
          >
            <Image src={dubaiAeSvg} alt="dubai.ae" width={48} height={7} />
          </Link>

          <Divider />

          {/* AI */}
          <Link
            href="#"
            aria-label="AI assistant"
            className="flex items-center gap-[4px] shrink-0 hover:opacity-75 transition-opacity"
          >
            <span className="font-dubai text-[9px] leading-[8px] tracking-[0.09px] text-black font-medium">
              AI
            </span>
          </Link>

          <Divider />

          {/* Chat */}
          <Link
            href="#"
            aria-label="Chat"
            className="flex items-center shrink-0 hover:opacity-75 transition-opacity"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1H13C13.5523 1 14 1.44772 14 2V9.5C14 10.0523 13.5523 10.5 13 10.5H4L1 13.5V2C1 1.44772 1.44772 1 2 1H1ZM2 2.5V11.0858L3.58579 9.5H13V2.5H2Z"
                fill="black"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

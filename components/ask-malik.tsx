"use client";

import { useState } from "react";
import { Plus, Mic, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AskMalikProps {
  className?: string;
  variant?: "light" | "dark";
  placeholder?: string;
}

export function AskMalik({
  className,
  variant = "light",
  placeholder = "Renew my Rental contract...",
}: AskMalikProps) {
  const [query, setQuery] = useState("");
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 md:flex-nowrap",
        className,
      )}
    >
      {/* Mascot + Label */}
      <div className="flex  items-center gap-3">
        {/* Mascot icon: orbital circle + inner chat icon */}
        <div className="relative  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
          >
            <g clip-path="url(#clip0_2082_5894)">
              <path
                d="M20.2696 2.11818C20.2696 2.0925 20.2696 2.07967 20.2696 2.05399C20.1167 1.11686 19.2504 0.48783 18.3203 0.629041C13.2625 1.45063 8.62509 4.06946 5.26168 8.01055C1.8728 11.9901 0 17.0738 0 22.3371C0 27.6004 0.471386 27.6389 1.40142 30.1165C1.65622 30.7969 2.30597 31.2206 2.99394 31.2206C3.68191 31.2206 3.40162 31.1821 3.59272 31.105C3.6182 31.105 3.63094 31.0922 3.65642 31.0794C4.49728 30.7199 4.9177 29.7571 4.58646 28.897C3.79657 26.8045 3.40162 24.5965 3.40162 22.3371C3.40162 13.184 9.8991 5.48158 18.8554 4.03095C19.76 3.88974 20.3843 3.04247 20.2696 2.11818Z"
                fill="url(#paint0_linear_2082_5894)"
              />
              <path
                d="M38.4629 33.8137C38.4502 33.8008 38.4247 33.788 38.412 33.7751C37.6858 33.2231 36.6538 33.3387 36.0678 34.0576C32.5515 38.3966 27.3535 40.8742 21.7988 40.8742C16.2441 40.8742 11.0461 38.3838 7.52983 34.0447C6.94378 33.3258 5.91183 33.2103 5.18564 33.7623C5.1729 33.7751 5.14742 33.788 5.13468 33.8008C4.40849 34.4042 4.29383 35.4825 4.89262 36.2143C9.05865 41.3492 15.2121 44.3018 21.7988 44.3018C28.3855 44.3018 34.539 41.3621 38.6922 36.2143C39.291 35.4825 39.1764 34.4042 38.4502 33.8008L38.4629 33.8137Z"
                fill="url(#paint1_linear_2082_5894)"
              />
              <path
                d="M38.3613 8.01053C34.9979 4.06945 30.3732 1.45062 25.3027 0.629024C24.3726 0.474975 23.5063 1.11684 23.3534 2.05397C23.3534 2.07965 23.3534 2.09249 23.3534 2.11816C23.2387 3.02962 23.863 3.87689 24.7676 4.03093C33.7239 5.48156 40.2214 13.184 40.2214 22.3371C40.2214 31.4901 39.8264 26.8173 39.0365 28.9227C38.7053 29.7828 39.1257 30.7456 39.9666 31.105C39.9921 31.105 40.0048 31.1178 40.0303 31.1307C40.2341 31.2077 40.438 31.2462 40.6291 31.2462C41.317 31.2462 41.9668 30.8226 42.2216 30.1422C43.1644 27.6517 43.6357 25.0329 43.6357 22.3499C43.6357 17.0994 41.7629 12.0158 38.3741 8.0362L38.3613 8.01053Z"
                fill="url(#paint2_linear_2082_5894)"
              />
              <path
                d="M32.6154 11.5665C27.6849 6.54708 20.0408 5.57144 14.0147 9.19158C12.7917 9.93615 11.6706 10.8348 10.7023 11.8874C10.0653 12.5678 10.1035 13.6462 10.766 14.288C10.766 14.288 10.7787 14.3009 10.7915 14.3137C11.1227 14.6218 11.5304 14.7759 11.9508 14.7759C12.3713 14.7759 12.8554 14.5961 13.1994 14.2367C13.951 13.4279 14.8174 12.7219 15.7729 12.157C20.4485 9.34563 26.3727 10.103 30.1947 14.0056C30.8572 14.6732 31.9274 14.686 32.6026 14.0184C32.6026 14.0184 32.6154 14.0056 32.6281 13.9928C33.2779 13.3252 33.2779 12.2597 32.6281 11.5922L32.6154 11.5665Z"
                fill="url(#paint3_linear_2082_5894)"
              />
              <path
                d="M36.3356 17.8439C36.068 16.9453 35.138 16.4447 34.2462 16.7014C34.2462 16.7014 34.2207 16.7014 34.208 16.7014C33.3034 16.9838 32.8066 17.9338 33.0741 18.8453C34.6666 24.0829 32.5135 29.7057 27.8506 32.5171C26.8951 33.0948 25.8632 33.5312 24.793 33.8137C23.8885 34.0576 23.3406 34.9947 23.5827 35.9062C23.5827 35.9062 23.5827 35.9318 23.5827 35.9447C23.7993 36.7021 24.4745 37.1899 25.2134 37.1899C25.9524 37.1899 25.5065 37.1771 25.6466 37.1386C27.0225 36.7791 28.3602 36.2143 29.5833 35.4697C35.5967 31.8495 38.374 24.5964 36.3228 17.8439H36.3356Z"
                fill="url(#paint4_linear_2082_5894)"
              />
              <path
                d="M19.1617 33.9035C16.0021 33.1718 13.3394 31.2205 11.6832 28.422C10.027 25.6234 9.58106 22.337 10.4474 19.179C10.7022 18.2676 10.1671 17.3176 9.26255 17.0737C9.24981 17.0737 9.23707 17.0737 9.22433 17.0737C8.33252 16.8555 7.41523 17.3818 7.17317 18.2804C6.06477 22.3499 6.63808 26.5734 8.77843 30.1935C10.9188 33.8008 14.3331 36.3041 18.41 37.2541C18.5374 37.2798 18.6648 37.2926 18.7922 37.2926C19.5566 37.2926 20.2446 36.7791 20.4357 36.0089C20.4357 35.996 20.4357 35.9832 20.4357 35.9575C20.6523 35.0332 20.0789 34.1089 19.1617 33.9035Z"
                fill="url(#paint5_linear_2082_5894)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2082_5894"
                x1="0"
                y1="15.9184"
                x2="20.2951"
                y2="15.9184"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#86BD71" />
                <stop offset="1" stop-color="#1E271B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2082_5894"
                x1="4.52316"
                y1="38.8716"
                x2="39.0999"
                y2="38.8716"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#86BD71" />
                <stop offset="1" stop-color="#1E271B" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2082_5894"
                x1="23.3279"
                y1="15.9312"
                x2="43.623"
                y2="15.9312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#86BD71" />
                <stop offset="1" stop-color="#1E271B" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2082_5894"
                x1="10.2564"
                y1="10.899"
                x2="33.0995"
                y2="10.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#86BD71" />
                <stop offset="1" stop-color="#1E271B" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_2082_5894"
                x1="23.5317"
                y1="26.92"
                x2="37.0108"
                y2="26.92"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#86BD71" />
                <stop offset="1" stop-color="#1E271B" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_2082_5894"
                x1="6.6126"
                y1="27.1511"
                x2="20.4866"
                y2="27.1511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#86BD71" />
                <stop offset="1" stop-color="#1E271B" />
              </linearGradient>
              <clipPath id="clip0_2082_5894">
                <rect width="43.6223" height="44.3147" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* Outer orbital glow */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
            src="/images/05b7ef6ca076db220e7708061e394cfc2ce97a26.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-contain"
          /> */}
          {/* Inner DLD icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
            src="/images/9d02249fc718ecee58f409351f1de00f9475ca57.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-3 object-contain"
          /> */}
        </div>
        <span
          className={cn(
            "text-2xl font-bold font-dubai",
            isDark ? "text-dld-white" : "text-dld-green",
          )}
        >
          Ask Malik
        </span>
      </div>

      {/* Input pill */}
      <div
        className={cn(
          "flex h-16 min-w-0 flex-1 items-center rounded-full px-2",
          isDark ? "bg-dld-white/10" : "bg-dld-green/10",
        )}
      >
        {/* Add button */}
        <button
          type="button"
          className={cn(
            "shrink-0 rounded-full p-2 transition-colors",
            "text-dld-black",
          )}
          aria-label="Add attachment"
        >
          <Plus className="size-5" />
        </button>

        {/* Divider */}
        <div
          className={cn(
            "mx-1 h-5 w-px shrink-0",
            isDark ? "bg-dld-white/20" : "bg-dld-green/20",
          )}
        />

        {/* Text input */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "min-w-0 flex-1 bg-transparent px-2 text-sm outline-none font-dubai",
            "text-dld-black placeholder:text-black",
          )}
          aria-label="Ask Malik a question"
        />

        {/* Mic button */}
        <button
          type="button"
          className={cn(
            "shrink-0 rounded-full p-2 transition-colors",
            "text-dld-text-black ",
          )}
          aria-label="Voice input"
        >
          <Mic className="size-5" />
        </button>

        {/* Send button */}
        <button
          type="button"
          className="ml-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-dld-green text-dld-white transition-colors hover:bg-dld-green/90"
          aria-label="Send question"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
